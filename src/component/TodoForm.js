import React, { useState,useEffect,useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    
    const handleSubmit = e =>{
        e.preventDefault();
        
        props.onSubmit({
            id:Math.floor(Math.random()*10000), // tao id ngau nhien ti le 1/10000
            text:input,
        });
        setInput('');
    };

    const handleChange = e=>{
        setInput(e.target.value)
    };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter..." value={input} name='text' className="todo-input" onChange={handleChange} ref={inputRef}/>
                <button className="todo-button" onClick={handleSubmit}> Add </button>
            </form>
        </div>
    )
}

export default TodoForm