import {  useGetTodosQuery } from "./store/api/todosApi"


export const TodoApp = () => {

  const {data: todo = [], isLoading} = useGetTodosQuery();

  return (
    <>
      <h1>Json Pleaceholder</h1>
      <hr />

      <h5>Cargando: { isLoading ? 'Cargando' : 'cargado'}</h5>

     
        {
          todo.map( todos => (
            <table className="table" key={todos.id}>
              <thead>
                <tr>
                  <th scope="col"><code>{ todos.id}</code></th>
                  <th scope="col">{todos.title}</th>
                </tr>
              </thead>
            </table>

          ))
        }
       
    </>
  )
}
