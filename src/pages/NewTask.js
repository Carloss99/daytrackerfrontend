import {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const NewTask = ({handleSubmit, formType, currentWeekDay}) => {
    const navigate = useNavigate()

    // const dateToday = () => {
    //     const date = new Date()
    //     return(`${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`)
    // }

    const formContainerStyle = {
        'width': '20em',
        'margin': 'auto',
    }
    const formStyle = {
        'height':'100%',
        'display':'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'gap':'2em'
    }
    
    const [task, setTask] = useState({
        title: '',
        notes: '',
        timestart: '',
        timeend: '',
        date: currentWeekDay,
        complete: false
    })

    

    const handleChange = (event) => {
        setTask((prev) => ({ ...prev, [event.target.name]: event.target.value}))
        
    }

    const submitTask = (e) => {
        e.preventDefault()
        console.log(task)
        handleSubmit(task, formType)
        navigate('/')
    }

    return(
        <div className='newtaskform' class='w-1/2 mx-auto my-12 border-2 border-zinc-500 rounded-xl p-6 font-bold '>
            <form class='flex flex-col gap-8 text-black' onSubmit={submitTask}>
                <div class='flex justify-around' >
                    <label class='text-white text-xl'>Day: </label> 
                    <select name='date' onChange={handleChange} class='rounded-xl text-black w-1/2'>
                     <option value='Sunday'>Sunday</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    </select>
                </div>

                <div class='flex justify-around'>
                    <label class='text-white text-xl'>Task: </label>
                    <input type='text' name='title' onChange={handleChange} class='rounded-xl w-1/2' required />
                </div>

                <div class='flex justify-around'>
                    <label class='text-white text-xl'>Note:</label>
                    <input type='text' name='notes' onChange={handleChange} class='rounded-xl w-1/2' required />
                </div>


                <div class='flex justify-around'>
                    <label class='text-white text-xl'>Start: </label>
                    <input type='time' name='timestart' onChange={handleChange} class='rounded-xl w-1/2 text-center' required />
                </div>
                
                <div class='flex justify-around'>
                    <label class='text-white text-xl'>End: </label>
                    <input type='time' name='timeend'  onChange={handleChange} class='rounded-xl w-1/2 text-center' required />
                </div>

                <input class='ring-2 ring-orange-500 rounded-md p-2 text-white w-1/2 m-auto hover:bg-orange-500' type='submit' />
            </form>
        </div>
    )
}

export default NewTask