import { useEffect, useState } from "react";
import Select from "react-select";

function BoonForm({godId, setCurrentBoons, god}){
const [boons, setBoons] = useState([])

useEffect(()=> {
    fetch(`http://localhost:9292/boons/${godId}`)
    .then(r=>r.json()
    .then(d => setBoons(d)))
}, [])

const handleChange = (e) => {
    setCurrentBoons(e)  
}





let options = boons.map((boon) => ({ key:boon.id, label: godId, options:[{ value: boon.id , label: boon.boon_name }]}))

return (
    <div>
        <h3>ready to pick {god}'s boons? well then...</h3>
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