import React from 'react';


function Bottomgrid(props) {
    const data = props.alldata.daily;
    const weekday=['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let counter=new Date().getDay();
    if (!data)
        return null;
    else {
        return (
            <div className='bottomgrid'>{
                data.map(day => {
                    return (<div className='dailydata'>
                        <div>{weekday[(counter++%7)]}</div>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
                        <div>{day.temp.max+ '\u00b0'+' C'}</div>
                        <div>{day.temp.min+ '\u00b0'+' C'}</div>
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default Bottomgrid;