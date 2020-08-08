import React, { useState } from 'react';
import SearchResults from './SearchResults';

function SearchData(props) {

    const [inputvalue, setInput] = useState('');

    const onInput = function (e) {
        const searchText = e.target.value;
        props.setSearchData(searchText);
        setInput(searchText);
    }
    
    return (
        <>
            <input onChange={onInput} type='text' value={inputvalue} placeholder='Enter Movie' />
            <SearchResults searchData={props.searchData} setMovieTitle={props.setMovieTitle} />
        </>
    );
}

export default SearchData;