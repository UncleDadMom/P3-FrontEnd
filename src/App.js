import './App.css';
import { useState, useEffect } from "react"
import RunContainer from './components/RunContainer';
import UserLogin from './components/UserLogin'
import styled from 'styled-components'

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  

  useEffect(()=> {
    fetch("http://localhost:9292/users")
    .then(r=>r.json())
    .then(user=>setUsers(user))
  },[])

  const userBase = users.map(user => ({key: user.id, label: user.name, options: [{ value: user.id, label: user.username }]}))

  

  return (
    <>
    <LoginStyle>
    <UserLogin userBase={userBase} setCurrentUser={setCurrentUser} />
    </LoginStyle>
    <div>
    <RunContainer currentUser={currentUser.value} />
    </div>
    </>
  );
}

export default App;


const LoginStyle = styled.div`
  background: black;
  color: red;
  grid-area: nav;
  padding: 0.25rem;
  border: solid black;
  width: 50vw
`