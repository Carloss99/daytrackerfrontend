import {Link} from 'react-router-dom'


const Task = ({title,id, timestart, timeend, complete}) => {
   

return(
    <div  class='my-10 border-2 border-sky-400 rounded-md px-4 py-8 '>
        <div class='flex justify-between '>
            <h3> <Link to={`/index/${id}`}  class='text-white' >{title}</Link> </h3>
            <h3>{timestart} - {timeend}</h3>
            <input type='checkbox' value={complete}/>
        </div>
        

        
    </div>
)
}

export default Task