import {useMemo, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'


const EditTask = ({getTasks,tasks, handleSubmit, formType}) => {

    const params = useParams()
    const navigate = useNavigate()

    const currentTask = useMemo(() => tasks.find(task => task.id === parseInt(params.id)), [params.id])

    const [task, setTask] = useState({
        id: currentTask.id,
        title: currentTask.title,
        notes: currentTask.notes,
        timestart: currentTask.timestart,
        timeend: currentTask.timeend,
        date: currentTask.date,
        complete: currentTask.complete
    })

    const handleChange = (event) => {
        setTask((prev) => ({ ...prev, [event.target.name]: event.target.value}))
    }

    const submitTask = (e) => {
        e.preventDefault()
    
        handleSubmit(task, formType)
        navigate('/')
    }

    useEffect(() => {
        getTasks()
    },[])
    
    return(
        <div className='newtaskform' class='w-1/2 mx-auto my-6 border-2 border-orange-500 rounded-xl px-6 py-12 font-bold '>
            <form class='flex flex-col gap-8 text-black' onSubmit={submitTask}>
                <div class='flex justify-around' >
                    <label class='text-white text-xl'>Day: </label> 
                    <select name='date' onChange={handleChange} class='rounded-xl text-black w-1/2 p-2'>
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
                    <input type='text' name='title' onChange={handleChange} class='rounded-xl w-1/2 p-2' required />
                </div>

                <div class='flex justify-around'>
                    <label class='text-white text-xl'>Note:</label>
                    <input type='text' name='notes' onChange={handleChange} class='rounded-xl w-1/2 h-16 p-2' required />
                </div>


                <div class='flex justify-around'>
                    <label class='text-white text-xl'>Start: </label>
                    <input type='time' name='timestart' onChange={handleChange} class='rounded-xl w-1/2 text-center p-2' required />
                </div>
                
                <div class='flex justify-around'>
                    <label class='text-white text-xl'>End: </label>
                    <input type='time' name='timeend'  onChange={handleChange} class='rounded-xl w-1/2 text-center p-2' required />
                </div>

                <input class='ring-2 ring-orange-500 rounded-md p-2 text-white w-1/2 m-auto hover:bg-orange-500' type='submit' />
            </form>
        </div>
    )
}

export default EditTask