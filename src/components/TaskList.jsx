import task from "./Task"

 function taskList() {
  const data = [
    {id:1, descripcion: 'hacer las tareas', realizado: false},
    {id:2, descripcion: 'sacar la basura', realizado: true},
    {id:3, descripcion: 'bañarme', realizado: true},
  ]
    return(
      <div>
     {data.map((task) => (
      <task key={task.id} descripcion={task.descripcion} realizado={task.realizado} />
     ))}
      </div>
    );
 }
 export default taskList