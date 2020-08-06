import React from 'react';

function Result(props){
    debugger;
    return(
     <div className='movieDetails'>         
        <img src={props.data.Poster}/>         
        <div className='specificDetails'>       
            <h3>{props.data.Title}</h3>   
            <div className='details'>
                <div>{props.data.Genre}</div>
                <div>{props.data.Runtime}</div>
                <div>{props.data.Rated}</div>
                <div>{props.data.imdbRating}</div>
            </div>
            <div className='plot'>{props.data.Plot}</div>
        </div>
    </div>
    );
}

export default Result;