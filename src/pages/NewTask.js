import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const NewTask = ({handleSubmit}) => {
    const navigate = useNavigate()

    const formContainerStyle = {
        'height': '20em',
        'width': '20em',
        'border': '1px solid black',
        'margin': 'auto'
    }
    const formStyle = {
        'height':'100%',
        'display':'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'gap':'2em'
    }
    const timeinput = {
        'width': '8em'
    }

    const [task, setTask] = useState({
        title: '',
        notes: [''],
        timestart: '',
        timeend: ''
    })
    const [currentNote, setCurrentNote] = useState()
    const [notes, setNotes]  = useState([''])
    const [notesCount, setNotesCount] = useState(1)
        



    const inputnotes = []
    const addNote = () => {
        setNotesCount(prev => (prev+1))
        for(let i = 0; i < notesCount; i++){
            inputnotes.push(<input type='text' name='notes' onChange={noteChange}  style={{'height':'3em'}}/>)
        }
        
        notes.push(currentNote)
    }






    
    const noteChange = (event) => {
        setCurrentNote(event.target.value)
    }

    const handleChange = (event) => {
        setTask((prev) => ({ ...prev, [event.target.name]: event.target.value}))
    }

    const submitTask = (e) => {
        e.preventDefault()
        notes.push(currentNote)
        const newtask = task
        notes.shift()
        newtask.notes = notes
        handleSubmit(newtask)
        console.log(newtask)
        navigate('/')
    }

    return(
        <div className='newtaskform' style={formContainerStyle}>
            <form style={formStyle} onSubmit={submitTask}>
                <label>Task: <input type='text' name='title' onChange={handleChange} /></label>

                
                
                {notes.map((note) => (<input type='text' name='notes' onChange={noteChange}  style={{'height':'3em'}}/>))}

                <button type='button' onClick={addNote}>+</button>
                

                <label>Start: <input type='time' name='timestart' onChange={handleChange}/></label>
                
                <label>End: <input type='time' name='timeend'  onChange={handleChange}/></label>

                <input type='submit' />

                

                
                
                

            </form>
        </div>
    )
}

export default NewTask