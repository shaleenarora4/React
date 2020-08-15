import React from 'react';

function Topleft(props){
    const location=props.location;
    const data=props.dailyData;
    return(
    <div className='topleft'>
        <h2 className='location'>{location}{','}{data.sys.country}</h2>
        <div>{data.weather[0].main}{" | "}{data.weather[0].description}</div>
        {/* <div>{data.sys.country}</div> */}
        <div>{ ((data.main.temp)-273.15).toFixed(2)+'C'}</div>
    </div>
    );
}

export default Topleft;