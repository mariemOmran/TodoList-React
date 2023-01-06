
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //status staff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //functions
  const filterHandler = () =>{
        switch (status) {
            case  'completed':
                setFilteredTodos (todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
              setFilteredTodos(todos);
              break;
        }
  }
  // save to local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => { 
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else { 
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodo);
    }
  }
  // function 
  useEffect(() => { 
    getLocalTodos();
  },[])
  useEffect(() => { 
    filterHandler();
    saveLocalTodos();
  },[todos,status])

  return (
    <div className="App">
      <header>
        <h1>Mariem's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} status={status} setStatus={setStatus} filteredTodos={filteredTodos} setFilteredTodos={ setFilteredTodos } />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={ filteredTodos } />
    </div>
  );
}

export default App;
