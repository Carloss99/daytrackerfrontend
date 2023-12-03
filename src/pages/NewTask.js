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
        notes: '',
        timestart: '',
        timeend: ''
    }
        
    )
    


    const handleChange = (event) => {
        setTask((prev) => ({ ...prev, [event.target.name]: event.target.value}))
    }

    const submitTask = (e) => {
        e.preventDefault()
        handleSubmit(task)
        navigate('/')
    }

    return(
        <div className='newtaskform' style={formContainerStyle}>
            <form style={formStyle} onSubmit={submitTask}>
                <label>Task: <input type='text' name='title' onChange={handleChange} /></label>

                <label>Notes: <input type='text' name='notes' onChange={handleChange}  style={{'height':'3em'}}/></label>

                <label>Start: <input type='time' name='timestart' onChange={handleChange}/></label>
                
                <label>End: <input type='time' name='timeend'  onChange={handleChange}/></label>

                <input type='submit' />

                
                
                

            </form>
        </div>
    )
}

export default NewTask