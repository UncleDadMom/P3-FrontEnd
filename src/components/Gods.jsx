import { useEffect, useState } from "react"
import BoonForm from './BoonForm'
import styled from 'styled-components'

const GodsList = styled.div`
  display: grid;
  height: 25vh;
  color: white;
  grid-template-rows: 0.1fr .5fr 0.25fr 0.25fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  padding-left: 10px;
  width: 10px;
  & hover{
    background: black;
  }
`
const BoonSelector = styled.div`
  display: flex;
  position: absolute;
  border: solid;
  color: red;
  background: black;
  top: 5;
  right: 0;
  padding: 0.25rem;
  justify-content: left;
  grid-area: nav;
  padding: 25px
`


function Gods(){
    const [gods, setGods] = useState([])
    const [isLiked, setIsLiked] = useState(0)
    const [selectedGodId, setSelectedGodId] = useState(0)

    function godSelector(e){
      setSelectedGodId(e.target.id)
      setIsLiked(e.target.id)
    }
    useEffect(()=> {
        fetch("http://localhost:9292/gods")
        .then(r=>r.json())
        .then(gods=>setGods(gods))
      },[])


       
    return(
    <>
    
    <h2>select the god with your favorite boons</h2>
      <GodsList>  
        {gods.map(god => 
        <div key={god.id}>
          <h2>{god.name}</h2>
          <img 
              id={god.id} 
              onClick={godSelector} 
              src={god.image}/>
          <li>{god.title}</li>
          <button 
              id={god.id} 
              onClick={godSelector}>
              {isLiked == god.id ? "⚔️" : "💀" }
          </button>
        </div>)}  
      </GodsList>
      <BoonSelector> 
      { (selectedGodId === 0) ? null : <BoonForm godId={selectedGodId}/>}
      </BoonSelector>
      </>
    )
}


export default Gods


