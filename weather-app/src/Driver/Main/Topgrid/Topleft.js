import React, { useState } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

function Topleft(props) {

    const location = props.location;
    const data = props.alldata.current;

    const weatherState = {
        '01d': 'CLEAR_DAY',
        '01n': 'CLEAR_NIGHT',
        '02d': 'PARTLY_CLOUDY_DAY',
        '02n': 'PARTLY_CLOUDY_NIGHT',
        '03d': 'CLOUDY',
        '03n': 'CLOUDY',
        '04d': 'CLOUDY',
        '04n': 'CLOUDY',
        '09d': 'RAIN',
        '09n': 'RAIN',
        '10d': 'RAIN',
        '10n': 'RAIN',
        '11d': 'RAIN',
        '11n': 'RAIN',
        '13d': 'SNOW',
        '13n': 'SNOW',
        '50d': 'WIND',
        '50n': 'WIND'
    };

    if (data) {
        const defaults = {
            icon: weatherState[data.weather[0].icon],
            color: 'white',
            size: 120,
            animate: true
        };


        return (
            <div className='topleft'>
                <div className='location'>{location}</div>
                <div className='main-weather'>{data.weather[0].main}</div>
                <div className='tempicon'>
                    <div className='temp'>{Math.round(data.temp) + '\u00b0'+' C'}</div>
                    <h2 className='weathericon'> <ReactAnimatedWeather
                        icon={defaults.icon}
                        color={defaults.color}
                        size={defaults.size}
                        animate={defaults.animate} />
                    </h2>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

export default Topleft;