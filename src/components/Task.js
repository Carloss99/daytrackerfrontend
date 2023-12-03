import {Link} from 'react-router-dom'


const Task = ({title, notes,id, timestart, timeend}) => {
    const taskStyle = {
        'border': '1px solid black',
        'margin': '2em auto',
        'width': '60vw',
        'padding':'0 2em',
        'color': '#27374D',
        'borderRadius': '20px'
    }

    

    const taskheader = {
        'display': 'flex',
        'justify-content': 'space-between',
        
    }

    

return(
    <div className='task' style={taskStyle}>
        <div style={taskheader}>
            <h3>{id}</h3>
            <h3> <Link to={`/${id}`}>{title}</Link> </h3>
            <h3>{timestart} - {timeend}</h3>
        </div>
        

        
    </div>
)
}

export default Task