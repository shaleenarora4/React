import React from 'react';

function Topright(props) {
    const data = props.alldata.current;

    if (!data) {
        return null;
    }
    else {

        return (
            <div className='info topright'>
                <div className='siders'><div>{'Humidity'}</div><div>{data.humidity + "%"}</div></div>
                <div className='siders'><div>{'Wind Speed'}</div><div>{data.wind_speed+'m/s'}</div></div>
                <div className='siders'><div>{'Wind Degree'}</div><div>{data.wind_deg+ '\u00b0'}</div></div>
                <div className='siders'><div>{'Cloudiness'}</div><div> {data.clouds + '%'}</div></div>
                <div className='siders'><div>{'Prssure'}</div><div>{data.pressure+' hPa'}</div></div>
                <div className='siders'><div>{'UV Index'}</div><div>{data.uvi}</div></div>
            </div>
        );
    }
}

export default Topright;