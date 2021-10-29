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

  const userBase = users.map(user => ({ value: user.id, label: user.username, runs: user.runs_logged, boons: user.boons}))

  

  return (
    <>
    <UserLogin userBase={userBase} setCurrentUser={setCurrentUser} currentUser={currentUser} />
    <div>
    <RunContainer currentUser={currentUser.value} />
    </div>
    </>
  );
}

export default App;


