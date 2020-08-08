import React, { useState, useEffect } from 'react';
import SearchData from './SearchData/SearchData';
import MovieDetails from './MovieDetails/MovieDetails';
import './Omdb.scss';


function Omdb() {

    const [searchData, setsearchdata] = useState({});
    const [movieData, setmoviedata] = useState({});
    const [title, setTitle] = useState('');

    const setSearchData = function (searchtext) {
        const searchText = searchtext;
        if (searchText.length > 2) {
            const url = "http://www.omdbapi.com/?apikey=a0a4f157&s=" + searchText;
            fetch(url).then(res => res.json().then(function (data) {
                if (data.Response === 'True') {
                    setsearchdata(data);
                }
            }));
        }
        else
            setsearchdata({});
    }

    const setMovieTitle = function (title) {
        setTitle(title);
        setMovieData(title);
    }

    const setMovieData = function (movieTitle) {
        setsearchdata({});
        const title = movieTitle.replace(/^\s+/g, '');
        const url = "http://www.omdbapi.com/?apikey=a0a4f157&t=" + title;
        fetch(url).then(response => response.json()
            .then(function (data) { setmoviedata(data) }));
    }

    return (
        <div className='container'>
            <SearchData setSearchData={setSearchData} searchData={searchData} setMovieTitle={setMovieTitle} />
            <MovieDetails movieData={movieData} />
        </div>
    );
}

export default Omdb;


