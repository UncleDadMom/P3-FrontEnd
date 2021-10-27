import { useEffect, useState } from "react"


function Bosses(){
const [bosses, setBosses] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/bosses")
        .then(r=>r.json())
        .then(b=>setBosses(b))
    }, [])

    const handleClick = (e) =>{
        alert('grats')
        // fetch("http://localhost:9292/beaten_bosses", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       comment: comment,
        //       score: score,
        //       user_id: userId,
        //       game_id: gameId,
        //     }),
        //   })
        //     .then((r) => r.json())
    }



    return(
        <div>
        <h2>how far did you get???</h2>
        <ol>
        <h3>THE FURIES</h3>
        <li><button onClick={handleClick}>{bosses[0].boss}</button></li>
        <li><button onClick={handleClick}>{bosses[1].boss}</button></li>
        <li><button onClick={handleClick}>{bosses[2].boss}</button></li>
        </ol>
        <button onClick={handleClick}>{bosses[3].boss}</button>
        <button onClick={handleClick}>{bosses[4].boss}</button>
        <button onClick={handleClick}>{bosses[5].boss}</button>
        </div>
    )

}

export default Bosses