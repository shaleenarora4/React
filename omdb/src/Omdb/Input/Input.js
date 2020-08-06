import React, { useState } from 'react';

const debounce = function (delay) {
    let timer;
    return function (e, props) {
        clearTimeout(timer);
        const value = e.target.value;
        timer = setTimeout(function () { props.onData(value); }, delay);
    };
}

const getSearchResults = debounce(500);

function Input(props) {
    const [value, setValue] = useState('');

    const addInput = function (e) {
        if (e.keyCode === 13 && e.target.value) {
            setValue(' ');
        }
    }

    const onChangeInput = function (e) {
            getSearchResults(e, props);
            setValue(e.target.value);           
    }

    return (
        <input onKeyUp={addInput} onChange={onChangeInput} value={value} type='text' placeholder='Enter Movie Title' />
    );
}

export default Input;