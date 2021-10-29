import { useState } from "react"
import Select from "react-select"
import styled from 'styled-components'


function UserLogin({userBase, setCurrentUser, currentUser}) {
    const [runCount, setRunCount] = useState()
    const [chosenBoons, setChosenBoons] = useState([])

    const handleChange = (e) => {
        setCurrentUser(e);
        setRunsAndBoons(e)

    }

    const setRunsAndBoons = (e) =>{
        fetch(`http://localhost:9292/users/${currentUser.value}`)
            .then(r=>r.json())
            .then(user=>setRunCount(user.runs_logged))
            fetch(`http://localhost:9292/chosen_boons/${currentUser.value}`)
            .then(r=>r.json())
            .then(boon=>setChosenBoons(boon))
    }
    

    return(
        <>
        <LoginStyle>
            <h3>select your player...</h3>
                <Select 
                    name="users"
                    options={userBase}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="who are you??"
                    onChange={handleChange}    
                />
        </LoginStyle>
        <PlayerStyle>
            <h3>current player:</h3>
            <div>
                {currentUser.label}
            </div>
            <h4>runs attempted:</h4>
            <div>
                {currentUser.runs}
            </div>
            <h4>boons used (all-time):</h4>
            <div>
            {chosenBoons.map((boon) => <li key={boon.boon_id}>{boon.boon_name}</li>)}
            </div>
        </PlayerStyle>
        </>
    )
}

export default UserLogin

const LoginStyle = styled.div`
  background: black;
  color: red;
  grid-area: nav;
  padding: 0.25rem;
  border: solid black;
  width: 50vw
`
const PlayerStyle = styled.div`
  background: black;
  color: red;
  grid-area: nav;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem;
  border: solid red;
  width: 30vw;
  text-align: center;
  border: 
`