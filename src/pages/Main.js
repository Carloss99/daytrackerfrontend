import Task from '../components/Task'
import {Link} from 'react-router-dom'

const Main = ({tasks}) => {


    const dateStyle = {
        'margin': 'auto',
        'width': '60vw',
    }


    const getCurrentDate = () => {
        const date = new Date()
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' })
        const year = date.getFullYear()


        return (`${month} ${day}, ${year}`)
    }

    const mainheader = {
        'display': 'flex',
        'width': '60vw',
        'margin': 'auto',
        'color':'#27374D'
    }



    return(
        <div className='main'>
            <div style={mainheader}>
                <h3 style={dateStyle}>{getCurrentDate()}</h3>
                <Link to='/new'><button style={{'width': '10em'}}>Add new Task</button></Link>
            </div>
            
            {tasks.map((task) => (
                <Task title={task.title} notes={task.notes} id={task.id} timestart={task.timestart} timeend={task.timeend}/>
            ))}
        </div>
    )
}

export default Main