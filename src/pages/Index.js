import {useParams, useNavigate} from 'react-router-dom'
import {useState ,useEffect} from 'react'



const Index = ({tasks, getTasks, deleteTask}) => {
    const indexStyle = {
        'height': '40vw',
        'width': '60vw',
        'border': '1px solid black',
        'margin': 'auto',
        'padding': '0 1em 1em 1em',
        'background': '#27374D'
    }

    const h2Style = {
        'borderRadius': '15px',
        'textAlign': 'center',
    }

    const notesStyle = {
        'borderRadius': '15px',
        'padding':'0 2em 2em 2em '
    }
 

    const params = useParams()
    const navigate = useNavigate()


    const currentTask = tasks.find(task => task.id === parseInt(params.id))

    const handleDelete = (e) =>{
        e.preventDefault()
        deleteTask(currentTask.id)
        navigate('/')
    }






    useEffect(() => {
        getTasks()
    },[])
    return(
        <div style={indexStyle}>
            <h2 style={h2Style}>{currentTask.title}</h2>
            <div style={notesStyle}>
                <div style={{'textAlign':'center'}}>Notes</div>
                <ul>
                    {currentTask.notes.map(note => (
                        <li>{note}</li>
                    ))}
                </ul>
            </div>
            
            <form onSubmit={handleDelete}>
                <input type='submit' value='delete'/>
            </form>
            
        </div>
    )
}

export default Index


