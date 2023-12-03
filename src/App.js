import './App.css';
import {Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Main from './pages/Main'
import NewTask from './pages/NewTask'
import Index from './pages/Index'

const apiURL = 'http://localhost:8000'


function App() {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const response = await fetch(apiURL + '/daytracker/')
    const data = await response.json()
    setTasks(data)
  }

  const handleSubmit = async(data) => {
    const response = await fetch(`${apiURL}/daytracker/`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(data)
    })
    getTasks()
  }


  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className="App">
      <h1 style={{'text-align':'center','color':'#27374D'}}>Day Tracker</h1>
      <Routes>
        <Route exact path='/' element={<Main tasks={tasks}/>}/>
        <Route exact path='/new' element={<NewTask handleSubmit={handleSubmit}/>}/>

        <Route exact path='/:id' element ={<Index tasks={tasks}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
