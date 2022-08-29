import logo from './logo.svg';
import './App.css';
import TodoForm from './component/TodoForm';
import Todolist from './component/TodoList';

function App() {
  return (
    <div className="App">
      <h1> Todo App </h1>
      <Todolist/>
    </div>
  );
}

export default App;
