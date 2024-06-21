import { useState } from 'react';
import ButtonIcon from '../../../Components/ButtonIcon';
import TaskList from '../TaskList';
import './style.css';

function TaskContent({ title, list, setList }) {
  function handleOnAdd(){
    setList([...list, {id: list.length, text: '', done: false, isEditing: true}]);
  }

  return (
    <div className="task-content">
      <div className='header'>
        <h2 className="title">{title}</h2>
        <ButtonIcon onClick={handleOnAdd}><i class="gg-math-plus"></i></ButtonIcon>
      </div>
      {list.length === 0 && <h4>Adicione sua primeira tarefa</h4>}
      <TaskList list={list} setList={setList} />
    </div>
  )
}

export default TaskContent;