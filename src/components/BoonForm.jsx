import { useEffect, useState } from "react";
import Select from "react-select";

function BoonForm({godId, setCurrentBoons}){
const [boons, setBoons] = useState([])
const [chosenBoons, setChosenBoons] = useState([{}])

useEffect(()=> {
    fetch(`http://localhost:9292/boons/${godId}`)
    .then(r=>r.json()
    .then(d => setBoons(d)))
}, [])

const handleChange = (e) => {
    setChosenBoons({
        e
    })
    // const boonIds = chosenBoons.map(chosen => chosen.value )
    // setCurrentBoons(boonIds)
}

setCurrentBoons(chosenBoons)



let options = boons.map((boon) => ({ key:boon.id, label: godId, options:[{ value: boon.id , label: boon.boon_name }]}))

return (
    <div>
        <h3>ready to pick your boons? well then...</h3>
        <Select 
        isMulti
        name="boons"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select your boon(s)"    
        onChange={handleChange}
        />
    </div>
)

}

export default BoonForm