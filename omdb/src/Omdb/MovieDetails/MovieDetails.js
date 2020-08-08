import React from 'react';

function MovieDetails(props){
    const data=props.movieData; 
    debugger;
    return( 
    <div className='movieDetails'>        
        <img src={ data.Poster!=='N/A'? data.Poster:'https://i.redd.it/vzvgy11qyhy31.png'}/>
        <div>
            <h3>{data.Title}</h3>
            <div>{data.Actors}</div>
            <div>{data.imdbRating}</div>
            <div>{data.Plot}</div>
        </div>
    </div>
    );
}

export default MovieDetails;