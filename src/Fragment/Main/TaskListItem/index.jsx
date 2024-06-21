import './style.css';
import ButtonIcon from '../../../Components/ButtonIcon';

function TaskListItem({ task, onChange, onDelete, list, setList }) {
  function changeIsEditing(isEditing) {
    setList(list.map(t => {
      if (t.id === task.id) {
        task.isEditing = isEditing;
        return task;
      }else {
        return t;
      }
    }));
  }

  function changeDone(done) {
    setList(list.map(t => {
      if (t.id === task.id) {
        task.done = done;
        return task;
      }else {
        return t;
      }
    }));
  }
  
  return (
    <li className='task-item'>
      <div className='content'>
        <input type="checkbox" checked={task.done} onChange={() => changeDone(!task.done)}/>
        {task.isEditing ? (<input value={task.text} onChange={(e) => onChange({...task, text: e.target.value})}/>) : <span className={task.done && 'done'}>{task.text}</span>}
      </div>

      <div className='task-action'>
        <ButtonIcon onClick={() => changeIsEditing(!task.isEditing)}>{task.isEditing ? (<i class="gg-check"></i>) : (<i class="gg-pen"></i>)}</ButtonIcon>
        <ButtonIcon onClick={() => onDelete(task.id)}><i class="gg-trash"></i></ButtonIcon>
      </div>
    </li>
  );
}

export default TaskListItem;