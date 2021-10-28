import './App.css';
import { useState, useEffect } from "react"
import RunContainer from './components/RunContainer';
import UserLogin from './components/UserLogin'

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/users")
    .then(r=>r.json())
    .then(user=>setUsers(user))
  },[])

  const userBase = users.map(user => ({key: user.id, label: user.name, options: [{ value: user.id, label: user.username }]}))

   const createRun = (currentUser) => {
    fetch("http://localhost:9292/runs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          user_id: currentUser.value
      })
  })
      .then(r=>r.json())
      .then(console.log)
   }

  return (
    <div className="parent">
    <UserLogin userBase={userBase} setCurrentUser={setCurrentUser} />
    <RunContainer currentUser={currentUser.value}/>
        <div className="top"> 
          <ul>
            {users.map(user => <li>{user.username}</li>)}
          </ul> 
        </div>
    </div>
  );
}

export default App;
