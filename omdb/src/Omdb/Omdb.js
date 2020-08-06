import React, { useState } from 'react';
import Input from './Input/Input';
import List from './List/List';
import Result from './Result/Result.js'
import './omdb.scss';

function Omdb() {
    // const [list, setListEl] = useState([]);
    const [data, setData] = useState({});
    const [movieData, setMovieData] = useState({});


    const onData = function (data) {
        const url = "http://www.omdbapi.com/?apikey=a0a4f157&s=" + data;
        fetch(url).then(response => response.json().then(function (data) {
            if (data.Response === 'True') {
                setData(data);
            }
        }
        ));
    }

    const onListItemClick = function (movieTitle) {
        setData({});
        const title = movieTitle.replace(/^\s+/g, '');
        const url = "http://www.omdbapi.com/?apikey=a0a4f157&t=" + title;
        fetch(url).then(response => response.json()
            .then(function (data) { setMovieData(data)}));
                
}

    return (
        <div className='container'>
            <Input onData={onData} />
            <List data={data} onListItemClick={onListItemClick} />
            <Result data={movieData}/>
        </div>
    );
}

export default Omdb;