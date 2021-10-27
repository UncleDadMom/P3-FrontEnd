import { useEffect, useState } from "react"

function Gods(){
    const [gods, setGods] = useState([])
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=> {
        fetch("http://localhost:9292/test")
        .then(r=>r.json())
        .then(gods=>setGods(gods))
      },[])

    const handleLike = () =>{
        setIsLiked(!isLiked)
    }
       
    return(
        <div className="list">
        {gods.map(god => 
        <div>
            <h2>{god.name}</h2>
            <img src={god.image}/>
            <li>{god.title}</li>
            <button onClick={handleLike}>{isLiked ? "⚔️" : "💀" }</button>
        </div>)}
        
      </div> 
    )
}


export default Gods