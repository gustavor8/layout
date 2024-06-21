import TaskListItem from '../TaskListItem';
import './style.css';

function TaskList({ list, setList }) {

  function handleOnChange(task) {
  
    setList(list.map(t => {
      if (t.id === task.id) {
        return task;
      }else {
        return t;
      }
    }));
  }

  function handleOnDelete(id) {
    setList(list.filter(t => t.id !== id));
  }


  return (
    <div className="task-list">
      {list.map(item => (<TaskListItem setList={setList} list={list} key={item.id} task={item} onChange={handleOnChange} onDelete={handleOnDelete} />))}
    </div>
  )
}

export default TaskList;