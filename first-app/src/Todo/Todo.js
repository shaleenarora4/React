import React,{useState} from 'react';
import Input from './Input/Input';
import List from './List/List';
import Filters from './Filters/Filters';
import './Todo.Module.css';

function Todo(){
    const [todos,setTodos]=useState([]);
    const [filter,setFilter]=useState('all');
    const [activeCount,setActiveCount]=useState(0);

    const addTodo=function(todo){
        setTodos([...todos,todo]);
        setActiveCount(activeCount+1);
    }

    const onDelete=function(todo){
        setTodos(todos.filter(t=>t!==todo));
    }

    const onCountChange=function(todo){
        if(todo.completed)
            setActiveCount(activeCount+1);
        else
            setActiveCount(activeCount-1);   
    }   

    const onStatusChange=function(todo){
        const updatedTodos=todos.map(
            t=>{
                if(t===todo){
                    return{
                        value:todo.value,
                        completed:!todo.completed
                    }
                }
                return t;
            });
        setTodos(updatedTodos);
    }

    

    return (
        <div className='container'>
            <div id='title'>Todos</div>
            <Input addTodo={addTodo} />   
            <List filter={filter} onCountChange={onCountChange} onStatusChange={onStatusChange} todos={todos} onDelete={onDelete}/>
            <Filters filter={filter} updateFilter={setFilter}/>
            <div>{activeCount} items left</div>
           
        </div>
    );
}

export default Todo;