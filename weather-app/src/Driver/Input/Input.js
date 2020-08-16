import React,{useState} from 'react';

function Input(props){
   const [value,setValue]=useState('');

    const onInputChange=function(e){
        setValue(e.target.value);
    }

    const onInput=function(e){
        if(e.charCode===13){
            props.setLocation( e.target.value);
            setValue('');
        }
    }

    return(
        <input className='input-div' value={value} onChange={onInputChange} onKeyPress={onInput} type='text' placeholder='Your City?'/>
    );
}

export default Input;

