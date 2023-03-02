import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, markTodo, setEditTodo, deleteTodo }) => {
  return (
    <>
    {todo && todo
        .sort((a,b) => a.id > b.id ? 1 : -1 )
        .map(
          (todoItem, index)=>{
            return (
              <React.Fragment key={todoItem.id}>
                <div className="col todo-bg">
  
                  <div className={todoItem.status?'done':''}>
                    <span className="todoItemNumber">
                      {index + 1}
                    </span>
                    <span className="todoItemText">
                      {todoItem.title}
                    </span>
                  </div>
  
                  <div className="iconsWrap">
                    <span title='Done'
                    onClick={ (e) => markTodo(todoItem.id)}>
                      <FontAwesomeIcon 
                      icon={faCircleCheck} />
  
                    </span>
                    {todoItem.status ? '' : <span 
                    onClick={() => setEditTodo({
                      id: todoItem.id,
                      title: todoItem.title,
                      status: todoItem.status
                    })}
                    title="Edit" id='penYellow'>
                      <FontAwesomeIcon 
                      icon={faPen} />
                    </span>}
  
                    <span title='Delete' id="trashRed"
                    onClick={ ()=>deleteTodo(todoItem.id)}>
                      <FontAwesomeIcon 
                      icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        )
      }
    </>
  )
}

export default Todo