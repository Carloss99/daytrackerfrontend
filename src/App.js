import './App.css';
import {Route, Routes} from 'react-router-dom'
import {useState ,useMemo, useEffect} from 'react'
import Main from './pages/Main'
import NewTask from './pages/NewTask'
import Index from './pages/Index'
import EditTask from './pages/EditTask';

const apiURL = 'https://daytracker-e619f1c2f33c.herokuapp.com'


function App() {
  const [tasks, setTasks] = useState([])

  //Days of the week stored in array
  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',]

  //grab current day of week
  const day = new Date().getDay()

  //return weekday as string when day changes
  const currentWeekDay =  useMemo(() => {
    return(weekDays[day])
  }, [day])

  //get todays date
//   const getCurrentDate = () => {
//     const date = new Date()
//     const day = date.getDate()
//     const month = date.toLocaleString('default', { month: 'long' })
//     const year = date.getFullYear()
//     const weekDay = currentWeekDay
//     return (`${weekDay} ${month} ${day}, ${year}`)
// }



  //fetch tasks
  const getTasks = async () => {
    const response = await fetch(apiURL + '/daytracker/')
    const data = await response.json()
    setTasks(data)
    console.log(data)
  }

  //handles submit form
  const handleSubmit = async(data, type) => {
    if(type === 'new'){
      const response = await fetch(`${apiURL}/daytracker/`, {
       method: 'post',
       headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
     })
    getTasks()
  }else{
    const response = await fetch(`${apiURL}/daytracker/${data.id}/`, {
      method:'put',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    getTasks()
  }

  }
  
  //deletes task
  const deleteTask = async (id) => {
    const response = await fetch(`${apiURL}/daytracker/${id}`, {
      method:'delete'
    })
    getTasks()
  }


  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="App" class='bg-zinc-800 text-white h-screen tracking-widest' >
      <h1 class='text-center text-4xl py-6 tracking-widest font-semibold'>Day Tracker</h1>
      <Routes>
        <Route exact path='/' element={<Main tasks={tasks} currentWeekDay={currentWeekDay} />}/>

        <Route exact path='/:weekday' element={<Main tasks={tasks} currentWeekDay={currentWeekDay} />}/>

        <Route exact path='/new' element={<NewTask handleSubmit={handleSubmit}  formType='new' currentWeekDay={currentWeekDay}/>}/>

        <Route exact path='/index/:id' element ={<Index tasks={tasks} getTasks={getTasks} deleteTask={deleteTask}/>} />

        <Route exact path='/edit/:id' element={<EditTask getTasks={getTasks} tasks={tasks} handleSubmit={handleSubmit} formType='edit'/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
