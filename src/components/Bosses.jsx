import { useEffect, useState } from "react"


function Bosses({currentUser}){
const [allBosses, setAllBosses] = useState([])
const [downedBoss, setDownedBoss] = useState({
    first_boss_down: false,
    second_boss_down: false,
    third_boss_down: false,
    hades_down: false,
    boss_id: 4
})
    useEffect(()=>{ 
        fetch("http://localhost:9292/bosses")
        .then(r=>r.json())
        .then(b=>setAllBosses(b))
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        addBoss(downedBoss)
        console.log(downedBoss);
    }

    function addBoss(downedBoss){
        fetch("http://localhost:9292/beaten_bosses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser,
                first_boss_down: downedBoss.first_boss_down,
                second_boss_down: downedBoss.second_boss_down,
                third_boss_down: downedBoss.third_boss_down,
                hades_down: downedBoss.hades_down,
                boss_id: 4})
        })
        .then(r=>r.json())
        .then(console.log)
    }

    // const bossnameabossrray = bosses.map(b=> b.boss_name)

    const changeFirstBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: false,
            third_boss_down: false,
            hades_down: false,
            boss_id: 1
        }) 
    }
   
    const changeSecondBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: false,
            hades_down: false,
            boss_id: 2
        }) 
    }
    const changeThirdBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: true,
            hades_down: false,
            boss_id: 3
        }) 
    }
    const changeFinalBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: true,
            hades_down: true,
            boss_id: 4
        }) 
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2>how far did you get???</h2>
        <button onClick={changeFirstBossState}>THE FURIES</button>
        <button onClick={changeSecondBossState}>{allBosses[3]?.boss_name}</button>
        <button onClick={changeThirdBossState}>{allBosses[4]?.boss_name}</button>
        <button onClick={changeFinalBossState}>{allBosses[5]?.boss_name}</button>
        </form>
    )

}

export default Bosses