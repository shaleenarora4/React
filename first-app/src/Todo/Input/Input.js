import React,{useState} from 'react';
import './Input.Module.css';

function Input(props){
    const [input,setInput]=useState('');

    const onInputChange=function(e){
        const value=e.target.value;
        setInput(value);
    }

    const onKeyPress=function(e){
        if(e.charCode===13 && e.target.value!==''){
            props.addTodo({
                completed:false,
                value:e.target.value
            });
            setInput('');
        }
    }
    
    return(
        <div className="inputContainer">
            <input onChange={onInputChange} onKeyPress={onKeyPress}  value={input} placeholder='Enter task'/>
        </div>
    );
}

export default Input