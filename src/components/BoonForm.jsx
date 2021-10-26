import { useEffect, useState } from "react";
import Select from "react-select";

function BoonForm(){
const [boons, setBoons] = useState([])

useEffect(()=> {
    fetch('http://localhost:9292/boons')
    .then(r=>r.json()
    .then(d => setBoons(d)))
}, [])

const options = boons.map(boon => ({ label: boon.god_id, options:[{ value: boon.id, label: boon.boon_name }]}))

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