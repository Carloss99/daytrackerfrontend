import {useParams, useNavigate} from 'react-router-dom'
import {useState ,useEffect} from 'react'



const Index = ({tasks, getTasks, deleteTask}) => {


    const params = useParams()
    const navigate = useNavigate()


    const currentTask = tasks.find(task => task.id === parseInt(params.id))

    const handleDelete = (e) =>{
        e.preventDefault()
        deleteTask(currentTask.id)
        navigate('/')
    }


    const handleReturn = () => {
        navigate('/')
    }

    const handleEdit = () => {
        navigate(`/edit/${currentTask.id}`)
    }

    useEffect(() => {
        getTasks()
    },[])
    
    return(
        <div class='w-3/4 h-3/4 m-auto border-2 border-black rounded-xl bg-zinc-700 flex flex-col justify-around'>
            <h2 class='text-center my-8 text-2xl'>{currentTask.title}</h2>
            <div class=' h-32 p-4 mx-2 border-2 border-zinc-500 rounded-lg '>
                {currentTask.notes}
            </div>
            
            <form onSubmit={handleDelete} class='flex justify-around w-9/12 m-auto'>
                <input type='submit' value='Delete' class='ring-2 ring-orange-500 rounded-md p-2'/>
                <button type='button' onClick={handleReturn} class='ring-2 ring-orange-500 rounded-md p-2'>Return</button>
                <button type='button' onClick={handleEdit}class='ring-2 ring-orange-500 rounded-md p-2'>Edit</button>
            </form>

            
        </div>
    )
}

export default Index


