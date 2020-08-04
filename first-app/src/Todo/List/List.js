import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.Module.css'

function List(props){
    const todos=props.todos;
    return(
        <div className='listContainer'>
            {
                todos.map(todo=>{
                    return <ListItem onCountChange={props.onCountChange} filter={props.filter} onStatusChange={props.onStatusChange} todo={todo} onDelete={props.onDelete}/>
                })
            }
        </div>    
    )
}

export default List;