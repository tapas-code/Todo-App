import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import UpdateTodo from './components/UpdateTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  //All Todos
  const [todo, setTodo] = useState([])

  //temp state 
  const [newTodo, setNewTodo] = useState('')
  //updated Todo
  const [editTodo, setEditTodo] = useState('')

  //function to add a new Todo
  const addTodo = () => {
    if(newTodo){
      setTodo([...todo,{
        id: todo.length + 1,
        title: newTodo,
        status: false
      }])
      setNewTodo('')
    }
  }

  //function to delete a Todo
  const deleteTodo = (id) => {
    setTodo(
      todo.filter((todoItem) => todoItem.id!==id)
    )
  }

  //function to mark todo as completed
  const markTodo = (id) => {
    setTodo(
      todo.map((todoItem) => {
        if(todoItem.id === id){
          return ({...todoItem, status: !todoItem.status})
        }else{
          return todoItem
        }
      })
    )
  }

  //function to get the changed Todo
  const changeTodo = (e) => {
    setEditTodo({
      id: editTodo.id,
      title: e.target.value,
      status: editTodo.status
    })
  }

  //function to update a Todo
  const updateTodo = () => {
    let todoList = todo.filter((todoItem)=> todoItem.id!==editTodo.id)
    setTodo([...todoList, editTodo])
    setEditTodo('')
  }

  //function to cancel update
  const cancelUpdate = () => {
    setEditTodo('')
  }

  return (
    <div className="container App">
      <br/><br/>
      <h2>To-Do App</h2>
      <br/><br/>

      {
        editTodo && editTodo? (
        <UpdateTodo 
        editTodo={editTodo}
        changeTodo={changeTodo}
        updateTodo={updateTodo}
        cancelUpdate={cancelUpdate}
        />
        ): (
        <AddTodo 
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
        )
      }

      {/* Displaying the Todos  */}

      {todo && todo.length!==0 ?
      ''
      :'Todos List is empty.' } 

      <Todo 
      todo={todo}
      markTodo={markTodo}
      setEditTodo={setEditTodo}
      deleteTodo={deleteTodo}
      />
      
    </div>
  );
}

export default App;
