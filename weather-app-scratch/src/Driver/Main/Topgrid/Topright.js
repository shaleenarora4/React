import React from 'react';

function Topright(props) {
    const data = props.alldata.current;

    if (!data) {
        return null;
    }
    else {

        return (
            <div className='info topright col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 '>
                <div className='row extradetails'>
                    <div className='siders col-4 align-items-center'><div>{'Humidity'}</div><div>{data.humidity + "%"}</div></div>
                    <div className='siders col-4'><div>{'Wind Speed'}</div><div>{data.wind_speed + 'm/s'}</div></div>
                    <div className='siders col-4'><div>{'Wind Degree'}</div><div>{data.wind_deg + '\u00b0'}</div></div>
                </div>
                <div className='row extradetails'>
                    <div className='siders col-4'><div>{'Cloudiness'}</div><div> {data.clouds + '%'}</div></div>
                    <div className='siders col-4'><div>{'Prssure'}</div><div>{data.pressure + ' hPa'}</div></div>
                    <div className='siders col-4'><div>{'UV Index'}</div><div>{data.uvi}</div></div>
                </div>
            </div>
        );
    }
}

export default Topright;