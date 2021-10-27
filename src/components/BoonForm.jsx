import { useEffect, useState } from "react";
import Select from "react-select";

function BoonForm({godId}){
const [boons, setBoons] = useState([])

useEffect(()=> {
    fetch(`http://localhost:9292/boons/${godId}`)
    .then(r=>r.json()
    .then(d => setBoons(d)))
}, [])

// useEffect(()=> {
//     fetch(`http://localhost:9292/gods/`)
//     .then(r=>r.json()
//     .then(g => setSelectedGod(g)))
// }, [])



let options = boons.map((boon) => ({ key:boon.id, label: godId, options:[{ value: boon.description , label: boon.boon_name }]}))

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
        />
    </div>
)

}

export default BoonForm