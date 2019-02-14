import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { storageKey } from './config/storage';
import { rootUrl } from "./config/url";

export function saveToLocalStorage(data){
  localStorage.setItem(storageKey, JSON.stringify(data));
}

function App(){

  let initialTodos = [
    { text: 'React', isCompleted: true },
    { text: 'Angular', isCompleted: false },
    { text: 'Vue', isCompleted: false },
    { text: 'Nodejs', isCompleted: true },
    { text: 'Expresjs', isCompleted: false },
    { text: 'Mongodb', isCompleted: false },
    { text: 'Webpack', isCompleted: true },
    { text: 'Babel', isCompleted: false },
    { text: 'Parcel', isCompleted: false },
    { text: 'Grunt', isCompleted: true },
    { text: 'NPM', isCompleted: false },
    { text: 'Jquery', isCompleted: true },
  ]

  let storedData = localStorage.getItem(storageKey);
  console.log(storedData);
  if(storedData){
    initialTodos = JSON.parse(storedData);
    console.log(initialTodos);
  } else {
    saveToLocalStorage(initialTodos);
  }

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = text => {
    const newTodos = [{ text, isCompleted: false }, ...todos];
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  }

  const toggleComplete = index => {
    // console.log(index);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  }
  
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    saveToLocalStorage(newTodos);
  }

  return (
    <Router>
      <div style={{ marginBottom: 200 }}>
        <Navbar/>
        <div className="row mt-4">
          <div className="col-md-8 mx-auto">
            <Switch>
              <Route exact path={rootUrl + '/'} 
                  component={() => <Home 
                    addTodo={addTodo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    todos={todos} 
                  />} 
                />
                <Route exact path={`${rootUrl}/about`} component={About} />
                <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;