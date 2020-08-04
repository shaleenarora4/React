import React,{useState} from 'react';
import './ListItem.Module.css'

function ListItem(props){
    const todo=props.todo;
    const filter=props.filter;

    const onStatusChange = function () {
        props.onStatusChange(todo);
    }

    const onCountChange=function(){
            props.onCountChange(todo);
    }

    if (filter === 'all' || (filter === 'completed' && todo.completed) || (filter === 'active' && !todo.completed)) {
        return (
            <div className={!todo.completed ? 'list-item' : 'list-item-strikeThru'}>
                <input onChange={() => {onStatusChange();onCountChange()}} checked={todo.completed} type="checkbox" />
                <p id='task'>{todo.value}</p>
                <span onClick={()=>props.onDelete(todo)}>X</span>
            </div>
        );
    }
    return null;
}

export default ListItem;