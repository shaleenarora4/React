import React from 'react';

function Topright(props) {
    debugger;
    const data = props.alldata.current;

    if (!data) {
        return null;
    }
    else {

        return (
            <div className='info'>
                <div className='siders'><div>{'Humidity'}</div><div>{data.humidity + "%"}</div></div>
                <div className='siders'><div>{'Wind Speed'}</div><div>{data.wind_speed}</div></div>
                <div className='siders'><div>{'Wind Degree'}</div><div>{data.wind_deg}</div></div>
                <div className='siders'><div>{'Cloudiness'}</div><div> {data.clouds + '%'}</div></div>
                <div className='siders'><div>{'Prssure'}</div><div>{data.pressure}</div></div>
                <div className='siders'><div>{'UV Index'}</div><div>{data.uvi}</div></div>
            </div>
        );
    }
}

export default Topright;