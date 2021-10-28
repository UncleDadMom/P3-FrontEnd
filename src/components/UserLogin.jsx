import { useState } from "react"
import Select from "react-select"



function UserLogin({userBase, setCurrentUser}) {

    const handleChange = (e) => {
        setCurrentUser(e);
    }



    return(
        <div>
        <h3>select your player...</h3>
        <Select 
        name="users"
        options={userBase}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="who are you??"
        onChange={handleChange}    
        />
        </div>
    )
}

export default UserLogin