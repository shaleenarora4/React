import React from 'react';

function Result(props){
    let title=props.title;
    title=movie_title.replace(/^\s+/g, '');
    const url="http://www.omdbapi.com/?apikey=a0a4f157&t="+title;
    fetch(url).then(response=>response.json()
    .then(function (data){let data=data}));

    return(
        <div></div>
    );
}

export default Result;