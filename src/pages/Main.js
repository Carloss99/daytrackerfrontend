import Task from '../components/Task'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Sidebar from '../components/Sidebar'

import {useParams} from 'react-router-dom'

const Main = ({tasks, currentWeekDay}) => {
    const date = () => {
        const date = new Date()

        return(`${date.getDate()-1}`)
    }

    const params = useParams()
    let dateSelected = currentWeekDay

    //checks to see if params has a value
    if(Object.keys(params).length !== 0){
        dateSelected = params.weekday
    }
    console.log(dateSelected)
   
    return(
        <div class='font-bold'>
            <h3 class='text-2xl text-center my-2'> {dateSelected}</h3>
                <div  class='flex justify-around '>
                <Sidebar currentWeekDay={dateSelected}/>
                
                    <div class='w-1/2'>
                        {tasks.map((task,index) => {
                           if(task.date.includes(dateSelected)){
                              return(<Task title={task.title} notes={task.notes} id={task.id} timestart={task.timestart} timeend={task.timeend} complete={task.complete}  />)
                            }
                        
                        })}
                         <Link to='/new' ><button class='ring-2 ring-orange-500 hover:bg-orange-500 p-1 rounded-md'>Add new Task</button></Link>
                    </div>
                    
               
            
            </div>
        </div>
       
    )
}

export default Main
