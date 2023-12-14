import {useState} from 'react'
import {Link} from 'react-router-dom'



const Sidebar = ({currentWeekDay}) => {

    const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]

    return (
        <div className='sidebar'class='text-xl'>
            
            {weekDays.map((day) => {
                 if(day === currentWeekDay){
                    return(<Link  to={`/${day}`}><h5 class='text-orange-500  mt-10 text-sm sm:text-base'>{day}</h5></Link>)
                 }else{
                   return(<Link class='text-white text-sm sm:text-base' to={`/${day}`}><h5 class='mt-10'>{day}</h5></Link>)
                    }
                })}
        </div>
    )
}

export default Sidebar