import Gods from './Gods' 
import Bosses from './Bosses'


function RunContainer({currentUser}){



    return(
        <div>
        <Gods />
        <Bosses currentUser={currentUser} />
        </div>
    )


}

export default RunContainer