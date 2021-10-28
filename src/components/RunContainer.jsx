import Gods from './Gods' 
import Bosses from './Bosses'


function RunContainer({currentUser}){



    return(
        <div>
        <Bosses currentUser={currentUser} />
        <Gods />
        
        </div>
    )


}

export default RunContainer