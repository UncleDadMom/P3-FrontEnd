import { useEffect, useState } from "react"


function Bosses(){
const [allBosses, setAllBosses] = useState([])
const [downedBoss, setDownedBoss] = useState({
    first_boss_down: false,
    second_boss_down: false,
    third_boss_down: false,
    hades_down_down: false
})
    useEffect(()=>{ 
        fetch("http://localhost:9292/bosses")
        .then(r=>r.json())
        .then(b=>setAllBosses(b))
    }, [])

    function handleSubmit(e){
        e.target.default
        addBoss(downedBoss)
    }

    function addBoss(downedBosses){
        fetch("http://localhost:9292/beaten_bosses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(downedBosses)
        })
        .then(r=>r.json())
        .then(console.log)
    }
    const handleClick = (e) =>{
        alert('grats')
       setDownedBoss(!downedBoss.first_boss_down)
    }
    // const bossnameabossrray = bosses.map(b=> b.boss_name)


    return(
        <form onSubmit={handleSubmit}>
        <h2>how far did you get???</h2>
        <ol>
        <h3>THE FURIES</h3>
        <li><button onClick={handleClick}>{allBosses[0]?.boss_name}</button></li>
        <li><button onClick={handleClick}>{allBosses[1]?.boss_name}</button></li>
        <li><button onClick={handleClick}>{allBosses[2]?.boss_name}</button></li>
        </ol>
        <button onClick={handleClick}>{allBosses[3]?.boss_name}</button>
        <button onClick={handleClick}>{allBosses[4]?.boss_name}</button>
        <button onClick={handleClick}>{allBosses[5]?.boss_name}</button>
        </form>
    )

}

export default Bosses