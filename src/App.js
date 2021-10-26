import './App.css';
import { useState, useEffect } from "react"
import BoonForm from './components/BoonForm'

function App() {
  const [gods, setGods] = useState([])
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/test")
    .then(r=>r.json())
    .then(gods=>setGods(gods))
  },[])

  useEffect(()=> {
    fetch("http://localhost:9292/users")
    .then(r=>r.json())
    .then(user=>setUsers(user))
  },[])

  return (
    <div className="parent">
    <BoonForm/> 
        <div className="top"> 
          <ul>
            {users.map(user => <li>{user.username}</li>)}
          </ul>
          <div className="list">
            <ul>
            {gods.map(god => <li>{god.name}</li>)}
            </ul>
          </div>  
        </div>
    </div>
  );
}

export default App;
