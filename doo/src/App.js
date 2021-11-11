import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  

  return (
    <div className="App">
      <header>
        <h1>John s Todo List </h1>
        
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
