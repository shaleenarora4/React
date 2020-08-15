import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

function Topright(props){
    const weatherState={'02d':'PARTLY_CLOUDY_DAY',
                        '02n':'PARTLY_CLOUDY_NIGHT',
                        '03d':'CLOUDY',
                        '03n':'CLOUDY',
                        '04d':'CLOUDY',
                        '04n':'CLOUDY',
                        '09d':'RAIN',
                        '09n':'RAIN',
                        '10d':'RAIN',
                        '10n':'RAIN',
                        '11d':'RAIN',
                        '11n':'RAIN',
                        '13d':'SNOW',
                        '13n':'SNOW',
                        '50d':'WIND',
                        '50n':'WIND'
                    };

    const defaults = {
        icon: weatherState[props.dailyData.weather[0].icon],
        color: 'teal',
        size: 100,
        animate: true
      };

    return(
        <div>
                   
            <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
            />
        </div>
    );
}

export default Topright;