import React from 'react';

function Topleft(props){
    const location=props.location;
    const data=props.dailyData;
    return(
    <div className='topleft'>
        <div className='location'>{location}</div>
        <div>{data.weather[0].main}</div>
        <div>{data.sys.country}</div>
        <div>{ ((data.main.temp)-273.15).toFixed(2)+'C'}</div>
    </div>
    );
}

export default Topleft;