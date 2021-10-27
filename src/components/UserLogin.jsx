import { useState } from "react"



function UserLogin() {
    const [credentials, setCredentials] =useState({
        username: '',
        password: '',
        runs_logged: 0
    })
    

    function handleChange(e) {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addUser(credentials)
        alert('pretty dope that you play hades')
    }

    function addUser(credentials){
        console.log(credentials);
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(r => r.json())
        .then(newUser => {
        console.log(newUser)
        })
    }
        


    return(
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} value={credentials.username} />
                <br/>
                <label>Password: </label>
                <input type="text" name="password" onChange={handleChange} value={credentials.password} />
                <br/>
                <input type="submit" name="Submit" value="Create"/>
            </form>
    )
}

export default UserLogin