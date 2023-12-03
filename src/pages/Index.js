import {useParams} from 'react-router-dom'
import {useState} from 'react'



const Index = ({tasks}) => {
    const indexStyle = {
        'height': '60vh',
        'width': '60vw',
        'border': '1px solid black',
        'margin': 'auto',
        'padding': '0 1em'
    }

    const h3Style = {
        'background': '#27374D',
        'borderRadius': '15px',
        'textAlign': 'center'
    }

    const notesStyle = {
        'height':'80%',
        'background': '#27374D',
        'borderRadius': '15px'
    }
 

    const params = useParams()
    const currentTask = tasks.find(task => task.id === parseInt(params.id))

    return(
        <div style={indexStyle}>
            <h3 style={h3Style}>{currentTask.title}</h3>
            <div style={notesStyle}>
                
            </div>
            
        </div>
    )
}

export default Index


