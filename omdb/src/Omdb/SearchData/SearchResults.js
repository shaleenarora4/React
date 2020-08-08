import React, { useState } from 'react';

function SearchResults(props) {
    const searchData = props.searchData;

    const onMovieSelect=function(title){
        props.setMovieTitle(title);
    }
  
     
    return (
        <div className='suggested'>{            
            searchData && searchData.Search && searchData.Search.map(item => {
                return (
                    <div className='itemDetails' onClick={onMovieSelect.bind(this,item.Title)}>
                        <img src={item.Poster} height='60px' width='60px'/>
                        <div>
                            <div>{item.Title}</div>
                            <div>{item.Year}</div>
                        </div>
                    </div>
                );
            })
        }</div> 
    ) ;
}

export default SearchResults;