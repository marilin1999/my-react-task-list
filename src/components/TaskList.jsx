import { Flex, Box, Button, Input, VStack, HStack, Text, useToast } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import Task from "./Task";
import { useState, useEffect } from "react";

function TaskList() {
  const [tareas, setTareas] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [nuevaTarea, setNuevaTarea] = useState({ title: '', descripcion: '' });
  const [editandoTarea, setEditandoTarea] = useState(null);
  const [tareaActual, setTareaActual] = useState({ id: null, title: '', descripcion: '', realizado: false });
  const [error, setError] = useState('');
  const toast = useToast();

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
    <Box>
      {error && <Text color='red.500'>{error}</Text>}
      {editandoTarea ? (
        <VStack as='form' onSubmit={guardarEdicion} spacing={4}>
          <Input
            name='title'
            placeholder='Título'
            value={tareaActual.title}
            onChange={handleEditChange}
          />
          <Input
            name='descripcion'
            placeholder='Descripción'
            value={tareaActual.descripcion}
            onChange={handleEditChange}
          />
          <HStack>
            <Button colorScheme='blue' type='submit'>Guardar</Button>
            <Button colorScheme='red' onClick={() => setEditandoTarea(null)}>Cancelar</Button>
          </HStack>
        </VStack>
      ) : (
        <Flex as="form" onSubmit={agregarTarea} align="center" justify="space-between" mb={4}>
        <Box flex="1" mr={2}>
          <Input
            name="title"
            placeholder="Título de la tarea"
            value={nuevaTarea.title}
            onChange={handleInputChange}
          />
        </Box>
        <Box flex="1" mr={2}>
          <Input
            name="descripcion"
            placeholder="Descripción de la tarea"
            value={nuevaTarea.descripcion}
            onChange={handleInputChange}
          />
        </Box>
        <Button colorScheme="teal" type="submit">Agregar Tarea</Button>
      </Flex>
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

      <Button colorScheme='red' onClick={eliminarTodasLasTareas} mt={4}>
        Borrar Todo
      </Button>
    </Box>
  );
}

export default TaskList;

