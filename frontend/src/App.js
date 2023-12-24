import { useQuery, gql } from '@apollo/client';

const query=gql`
query getALLTodos{
  getTodos {
    title
    userId {
      name
    }
  }
}

`



function App() {

  const {data,loading}=useQuery(query)
  if (loading) return <p>Loading...</p>;


  return (
    <div className="App">
    <table>
      <tbody>
        {
          data?.getTodos?.map((todo)=>(
            <tr key={todo?.id}>
              <td>{todo?.title}</td>
              <td>{todo?.userId?.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  );
}

export default App;
