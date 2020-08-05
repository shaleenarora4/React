import React,{useState,useEffect} from 'react';
import Input from './Input/Input';
import List from './List/List';
import Filters from './Filters/Filters';
import './Todo.Module.css';

function Todo(){

    const getInitialState=function(){
        const todos=JSON.parse(localStorage.getItem('todos')) || [];        
        return todos;
    }

    const getInitialCount=function(){
        const activeCount=JSON.parse(localStorage.getItem('activeCount')) || 0;
        return activeCount;
    }

    const [todos,setTodos]=useState(getInitialState());
    const [filter,setFilter]=useState('all');
    const [activeCount,setActiveCount]=useState(getInitialCount());

    const addTodo=function(todo){
        setTodos([...todos,todo]);        
        setActiveCount(activeCount+1);
    }

    useEffect(()=> {
        localStorage.setItem('todos',JSON.stringify(todos));
        localStorage.setItem('activeCount',JSON.stringify(activeCount));
      });

    const onDelete=function(todo){
        if(!todo.completed)
            setActiveCount(activeCount-1);
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
            <Input addTodo={addTodo}/>  
            <List filter={filter} onCountChange={onCountChange} onStatusChange={onStatusChange} todos={todos} onDelete={onDelete}/>
            <Filters filter={filter} updateFilter={setFilter}/>
            <div>{activeCount} items left</div>
           
        </div>
    );
}

export default Todo;