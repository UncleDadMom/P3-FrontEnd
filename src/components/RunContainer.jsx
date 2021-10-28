import Gods from './Gods' 
import Bosses from './Bosses'
import { useState } from 'react'


function RunContainer({currentUser}){
    const [currentBoons, setCurrentBoons] = useState([])


    return(
        <div>
        <Bosses currentUser={currentUser} currentBoons={currentBoons}/>
        <Gods  setCurrentBoons={setCurrentBoons}/>
        
        </div>
    )


}

export default RunContainer