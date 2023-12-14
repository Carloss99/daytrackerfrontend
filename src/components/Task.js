import {Link} from 'react-router-dom'


const Task = ({title,id, timestart, timeend, complete}) => {
   
    function time(time) {
        var timeSplit = time.split(':'),
          hours,
          minutes,
          meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (hours > 12) {
          meridian = 'PM';
          hours = `0${hours-12}`;
        } else if (hours < 12) {
          meridian = 'AM';
          if (hours == 0) {
            hours = 12;
          }
        } else {
          meridian = 'PM';
        }
        return(hours + ':' + minutes + ' ' + meridian);
      }

return(
    <div className='task' class=' text-xs sm:text-base sm:py-8 flex justify-around flex-col sm:flex-row'>
        
            <h3> <Link to={`/index/${id}`}  class='text-white ' >{title}</Link> </h3>
            <h3>{time(timestart)} - {time(timeend)}</h3>
        
    </div>
)
}

export default Task