import { useState } from 'react';
import './style.css';
import TaskContent from './TaskContent';

function Main() {
  const [dayTasks, setDayTasks] = useState([]);
  const [nightTasks, setNightTasks] = useState([]);

  
  
  return (
    <div className='main'>
      <TaskContent title="Dia" list={dayTasks} setList={setDayTasks}/>
      <TaskContent title="Noite" list={nightTasks} setList={setNightTasks}/>
    </div>
  )
}


export default Main;