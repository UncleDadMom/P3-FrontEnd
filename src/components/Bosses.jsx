import { Button } from "antd"
import { useEffect, useState } from "react"
import styled from 'styled-components'

const FormStyle = styled.form`
    border: solid;
    width: 50vw;
    padding: 0.25rem;
    & button {
            color: red;
            background-color: black;
            padding: 15px 45px;
            font-family: Helvetica, sans-serif;     
    }
    & button:hover {
    font-weight: bold
    color: black;
    background-color: red;
    background-position: right center; 
            color: #fff;
            text-decoration: none
    }
`

function Bosses({currentUser, currentBoons}){
const [allBosses, setAllBosses] = useState([])
const [mappedBoons, setMappedBoons] = useState([])
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

    function mapBoons(currentBoons){
        let boons = currentBoons.e.map(boon=>boon.value)
        setMappedBoons(boons)
    }

    function handleSubmit(e){
        e.preventDefault()
        mapBoons(currentBoons)
        addBoss(downedBoss, mappedBoons)
        console.log(downedBoss);
        console.log(mappedBoons);
    }

    function addBoss(downedBoss, mappedBoons){
        fetch("http://localhost:9292/beaten_bosses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser,
                boon_id: mappedBoons, 
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
        alert("congrats on beating the Furies...")
    }
   
    const changeSecondBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: false,
            hades_down: false,
            boss_id: 2
        }) 
        alert("congrats on beating the freakin...Bone Hydra")
    }
    const changeThirdBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: true,
            hades_down: false,
            boss_id: 3
        }) 
        alert("Theseus and Asterius? Dead as hell")
    }
    const changeFinalBossState = () => {
        setDownedBoss({first_boss_down: true,
            second_boss_down: true,
            third_boss_down: true,
            hades_down: true,
            boss_id: 4
        })
        alert("Woah you beat the game?? Please email me I need help") 
    }

    return(
        <FormStyle onSubmit={handleSubmit}>
        <h3>how far did you get? (hint: only attempt these once you have asked the Gods for help...)</h3>
        <button onClick={changeFirstBossState}>THE FURIES</button>
        <button onClick={changeSecondBossState}>{allBosses[3]?.boss_name}</button>
        <button onClick={changeThirdBossState}>{allBosses[4]?.boss_name}</button>
        <button onClick={changeFinalBossState}>{allBosses[5]?.boss_name}</button>
        </FormStyle>
    )

}

export default Bosses

