const Task = ({ id, title, descripcion, realizado, borrarTarea, iniciarEdicion, toggleComplete }) => {
  const handleDelete = () => {
  const confirmDelete = window.confirm('¿Estás seguro de que quieres borrar esta tarea?');
  if (confirmDelete) {
    borrarTarea(id);
  }
};

const handleToggleComplete = () => {
  toggleComplete(id);
};

return (
  <div
    style={{
      border: 'solid 1px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      marginBottom: '10px',
      justifyContent: 'space-between',
      backgroundColor: realizado ? '#d3f0ff' : 'inherit', // Cambia el color de fondo si la tarea está completada
    }}
  >
    <p>{title}</p>
    <p>{descripcion}</p>
    <p style={{ fontWeight: 'bold', color: realizado ? 'green' : 'red' }}>
      {realizado ? 'Completado' : 'Pendiente'}
    </p>
    <button onClick={handleDelete} title="Borrar tarea">
      🗑️
    </button>
    <button onClick={() => iniciarEdicion({ id, title, descripcion, realizado })} title="Editar tarea">
      ✏️
    </button>
    <button onClick={handleToggleComplete} title={realizado ? 'Marcar como Pendiente' : 'Marcar como Completado'}>
      {realizado ? '🔲' : '✅'}
    </button>
  </div>
);
};

export default Task;


