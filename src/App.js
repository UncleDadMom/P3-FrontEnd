import './App.css';
import { useState, useEffect } from "react"

import UserLogin from './components/UserLogin';
import Gods from './components/Gods';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/users")
    .then(r=>r.json())
    .then(user=>setUsers(user))
  },[])

  return (
    <div className="parent">
    <UserLogin />
    <Gods />
        <div className="top"> 
          <ul>
            {users.map(user => <li>{user.username}</li>)}
          </ul> 
        </div>
    </div>
  );
}

export default App;
