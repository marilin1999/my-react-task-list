import Task from "./Task";
import { useState, useEffect } from "react";

function TaskList() {
  const [tareas, setTareas] = useState(
    () => JSON.parse(localStorage.getItem('tasks')) || [
      { id: 1, title: 'Hacer las tareas', descripcion: 'Estudiar para el examen de matemáticas', realizado: false },
      { id: 2, title: 'Sacar la basura', descripcion: 'Sacar la basura después de cenar', realizado: true },
      { id: 3, title: 'Bañarse', descripcion: 'Bañarse antes de salir', realizado: true },
    ]
  );

  const [nuevaTarea, setNuevaTarea] = useState({ title: '', descripcion: '' });
  const [editandoTarea, setEditandoTarea] = useState(null);
  const [tareaActual, setTareaActual] = useState({ id: null, title: '', descripcion: '', realizado: false });
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tareas));
  }, [tareas]);

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id, title, descripcion, realizado) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, title, descripcion, realizado } : tarea));
  };

  const agregarTarea = (event) => {
    event.preventDefault();
    if (nuevaTarea.title.length < 3) {
      setError('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }
    const tareaAgregada = {
      id: Date.now(),
      title: nuevaTarea.title,
      descripcion: nuevaTarea.descripcion,
      realizado: false
    };
    setTareas([...tareas, tareaAgregada]);
    setNuevaTarea({ title: '', descripcion: '' });
    setError('');
  };

  const iniciarEdicion = (tarea) => {
    setEditandoTarea(tarea.id);
    setTareaActual({ ...tarea });
  };

  const guardarEdicion = (event) => {
    event.preventDefault();
    editarTarea(tareaActual.id, tareaActual.title, tareaActual.descripcion, tareaActual.realizado);
    setEditandoTarea(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaTarea({ ...nuevaTarea, [name]: value });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setTareaActual({ ...tareaActual, [name]: value });
  };

  const toggleComplete = (id) => {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, realizado: !tarea.realizado } : tarea
    ));
  };

  const eliminarTodasLasTareas = () => {
    setTareas([]);
    localStorage.removeItem('tasks'); // Esto eliminará las tareas de localStorage
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {editandoTarea ? (
        <form onSubmit={guardarEdicion}>
          <input
            name="title"
            type="text"
            placeholder="Título"
            value={tareaActual.title}
            onChange={handleEditChange}
          />
          <input
            name="descripcion"
            type="text"
            placeholder="Descripción"
            value={tareaActual.descripcion}
            onChange={handleEditChange}
          />
          <button type="submit">Guardar</button>
          <button onClick={() => setEditandoTarea(null)}>Cancelar</button>
        </form>
      ) : (
        <form onSubmit={agregarTarea}>
          <input
            name="title"
            type="text"
            placeholder="Título de la tarea"
            value={nuevaTarea.title}
            onChange={handleInputChange}
          />
          <input
            name="descripcion"
            type="text"
            placeholder="Descripción de la tarea"
            value={nuevaTarea.descripcion}
            onChange={handleInputChange}
          />
          <button type="submit">Agregar Tarea</button>
        </form>
      )}

      {tareas.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          descripcion={task.descripcion}
          realizado={task.realizado}
          borrarTarea={borrarTarea}
          iniciarEdicion={() => iniciarEdicion(task)}
          toggleComplete={toggleComplete}
        />
      ))}

      <button onClick={eliminarTodasLasTareas}>Borrar Todo</button>
    </div>
  );
}

export default TaskList;

