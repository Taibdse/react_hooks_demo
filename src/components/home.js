import React, { useState } from "react";
import classnames from 'classnames';

function Todo({ todo, index, toggleComplete, deleteTodo }){
  let { isCompleted, text } = todo;
  return (
    <div className="todo list-group-item" style={{ textDecoration: todo.isCompleted ? 'line-through': '' }}>
      {text}
      <button className={classnames('badge', { 'badge-success': isCompleted, 'badge-info': !isCompleted })} onClick={() => toggleComplete(index)} 
      style={{ marginLeft: 20, marginRight: 5 }}>
      {isCompleted ? 'completed' : 'not completed'}
      </button>
      <button className="badge badge-danger" onClick={() => deleteTodo(index)}>delete</button>
    </div>
  )
}

function TodoForm({addTodo}){
  const [value, setValue] = useState('');

  const handleSUbmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSUbmit}>
      <div className="form-group">
        <input placeholder="Enter name..." type="text" 
        className="form-control" value={value} 
        onChange={e => setValue(e.target.value)}/>
      </div>
    </form>
  )
}

function Home({ todos, toggleComplete, deleteTodo, addTodo }){
  return (
    <div className="app">
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-8 mx-auto">
                    <TodoForm addTodo={addTodo} />
                    <div className="todo-list list-group">
                    {todos.map((todo, index) => (
                        <Todo 
                        key={index} 
                        index={index} 
                        todo={todo} 
                        toggleComplete={toggleComplete} 
                        deleteTodo={deleteTodo}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;