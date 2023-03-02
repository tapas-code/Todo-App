import React from 'react'

const UpdateTodo = ({ editTodo, changeTodo, updateTodo, cancelUpdate }) => {
  return (
    <>
    {/* Form for updating a Todo */}

    <div className="row my-20">
        <div className="col">
            <input 
            value={editTodo && editTodo.title}
            onChange={ (e) => changeTodo(e) }
            className='form-control form-control-lg' />
        </div>
        <div className="col-auto ">
            <button 
            onClick={updateTodo}
            className='btn btn-lg btn-success mr-20'>Update</button>
            <button 
            className='btn btn-lg btn-warning'
            onClick={cancelUpdate}
            >Cancel</button>
        </div>
    </div>
    </>
  )
}

export default UpdateTodo