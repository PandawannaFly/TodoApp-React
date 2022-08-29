import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

function Todolist(){
    const [todos,setTodos] =useState([]);
    const addTodo = todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        };
        const newTodos = [todo,...todos]

        setTodos(newTodos);
    };

    const removeTodo = id=>{
        const removeArr = [...todos].filter(todo=> todo.id !== id);

        setTodos(removeArr)
    };

    const updatedTodo = (todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        };
        setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id ===id ){
                todo.isCompelete = !todo.isCompelete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };



    return (
        <div> 
            <TodoForm onSubmit={addTodo}/>
            <Todo todos ={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo = {updatedTodo}/>
        </div>
    )
}

export default Todolist