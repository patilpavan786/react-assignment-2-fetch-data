import React, {useEffect, useState} from 'react';
;
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[data, setData]=useState([])

useEffect (()=>{
  fetch ("https://jsonplaceholder.typicode.com/posts ")
  .then(res=>res.json())
  .then(data=>setData(data))
},[])
  return (
    <div className="App">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>

        </tr>
      </thead>
    {data.map((x,id)=>{

    
        return (
          <tbody key={id}>
            
          <tr>
            <td>{x.userId}</td>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.body}</td>
          </tr>
       
        
      
      
      </tbody>
        )
    })}
    </Table>
    </div>
  );
}

export default App;