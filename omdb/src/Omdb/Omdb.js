import React, { useState } from 'react';
import Input from './Input/Input';
import List from './List/List';
import './omdb.scss';

function Omdb() {
    const [list, setListEl] = useState([]);
    const [data, setData] = useState({});

    const addInput = function (data) {
        setListEl([...list, data]);
        onData(data);
    }

    const onData = function (data) {
        const url = "http://www.omdbapi.com/?apikey=a0a4f157&s=" + data;
        fetch(url).then(response => response.json().then(function (data) {
            if (data.Response === 'True') {
                setData(data);
            }
        }
        ));
    }

    return (
        <div className='container'>
            <Input addInput={addInput} onData={onData} />
            <List data={data} />
        </div>
    );
}

export default Omdb;