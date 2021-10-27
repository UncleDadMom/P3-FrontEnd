import { useEffect, useState } from "react"
import BoonForm from './BoonForm'

function Gods(){
    const [gods, setGods] = useState([])
    const [isLiked, setIsLiked] = useState(false)
    const [selectedGodId, setSelectedGodId] = useState(0)

    function godSelector(e){
      setSelectedGodId(e.target.id)
    }
    useEffect(()=> {
        fetch("http://localhost:9292/gods")
        .then(r=>r.json())
        .then(gods=>setGods(gods))
      },[])

    const handleLike = () =>{
        setIsLiked(!isLiked)
    }
       
    return(
        <div className="list">
        {gods.map(god => 
        <div key={god.id}>
            <h2>{god.name}</h2>
            <img id={god.id} onClick={godSelector} src={god.image}/>
            <li>{god.title}</li>
            <button onClick={handleLike}>{isLiked ? "⚔️" : "💀" }</button>
        </div>)}
        { (selectedGodId === 0) ? null : <BoonForm godId={selectedGodId}/>}
      </div> 
    )
}


export default Gods