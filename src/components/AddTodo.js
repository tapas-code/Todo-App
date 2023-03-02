import React from 'react';

const AddTodo = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <>
    {/* Form for adding new Task  */}

    <div className="row my-20">
        <div className="col">
            <input 
            value={newTodo}
            onChange={ (e) => setNewTodo(e.target.value) }
            className='form-control form-control-lg' />
        </div>
        <div className="col-auto">
            <button 
            onClick={addTodo}
            className="btn btn-lg btn-success">
            Add Todo
            </button>
        </div>
    </div>
    </>
  )
}

export default AddTodo
