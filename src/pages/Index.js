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
        <div class='w-11/12 sm:w-3/4 h-3/4 m-auto border-4 border-orange-500 rounded-xl flex flex-col justify-around'>
            <h2 class='text-center my-4 sm:my-8 text-2xl'>{currentTask.title}</h2>
            <div class=' h-32 sm:mx-8 p-4 mx-2 border-2 border-zinc-500 rounded-lg '>
                {currentTask.notes}
            </div>
            
            <form onSubmit={handleDelete} class='flex justify-around sm:items-end w-full sm:w-9/12 m-auto'>
                <input type='submit' value='Delete' class='ring-2 ring-orange-500  rounded-md p-2 hover:bg-orange-500'/>
                <button type='button' onClick={handleReturn} class='ring-2 ring-orange-500 rounded-md p-2 hover:bg-orange-500'>Return</button>
                <button type='button' onClick={handleEdit}class='ring-2 ring-orange-500 rounded-md p-2 hover:bg-orange-500'>Edit</button>
            </form>

            
        </div>
    )
}

export default Index


