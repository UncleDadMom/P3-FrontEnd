import { useState } from "react";
import Select from "react-select";

function BoonForm(){
const options = [
    {label: "Aphrodite",
    options:[
    { value: 'heartbreak-strike', label: 'Heartbreak Strike' },
    { value: 'heartbreak-flourish', label: 'Heartbreak Flourish' },
    { value: 'crush-shot', label: 'Crush Shot' },
    { value: 'passion-flare', label: 'Passion Flare' }, 
    { value: 'passion-dash', label: 'Passion Dash' },
    { value: 'aphrodites-aid', label: 'Aphrodite\'s Aid' },
    { value: 'dying-lament', label: 'Dying Lament' },
    { value: 'wave-of-despair', label: 'Wave of Despair' },
    { value: 'different-league', label: 'Different League' },
    { value: 'life-affirmation', label: 'Life Affirmation' },
    { value: 'empty-inside', label: 'Empty Inside' }
  ]}];
  
  const [selectedValue, setSelectedValue] = useState([]);

//   const handleChange = (e) => {
//       setSelectedValue(Array.isArray(e) ? e.map(x=> x.value) : [])
//   }

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