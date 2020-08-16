import React from 'react';
import Input from './Input/Input';
import Main from './Main/Main';
import './Driver.scss';

class Driver extends React.Component {
debugger;
  constructor(props) {
    super(props);
    // this.state =  { location: 'London' ,
    //                   alldata:{current:{
    //                   clouds: 40,
    //                   dew_point: 27.51,
    //                   dt: 1597599779,
    //                   feels_like: 37.14,
    //                   humidity: 84,
    //                   pressure: 999,
    //                   sunrise: 1597537262,
    //                   sunset: 1597584600,
    //                   temp: 30.53,
    //                   wind_speed: 3.02,
    //                   "weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"02d"}],
    //                   "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15}}}  
    //               };
    this.state={
        location:'',
        alldata:{}
    }
    this.setLocation=this.setLocation.bind(this);
}

changeData=function(url,reslocation){  
  fetch(url).then(res => res.json()).then(
    (data)=>{//this.setState({dailyData:data});  
              let loc=reslocation; 
              const {lat,lon}=data.coord;
              let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
              exclude={part}&appid=e43904c5c292d78a35e71ce7973149ed&units=metric`
              fetch(url).then(res=>res.json()).then(data=> this.setState({location: loc,alldata:data})
              );
  });
}

changeUrl=function(location){     
  if(location){
      let updatedUrl='https://api.openweathermap.org/data/2.5/weather?q=city&appid=e43904c5c292d78a35e71ce7973149ed';
      updatedUrl=updatedUrl.replace('city',location);
      this.changeData(updatedUrl,location);         
  }
}

setLocation=function(resLocation){
  // this.setState({location: resLocation}); 
  this.changeUrl(resLocation);             
}

componentDidMount() {
  this.changeData();
}

   render(){
    return (
        <div className='container'>
            <div className='Title'>Weather App</div>
            <Input setLocation={this.setLocation}/>
            <Main location={this.state.location}  alldata={this.state.alldata} /*timezone={this.state.alldata.timezone}*//>
        </div>
    );
   }
}

export default Driver;


/*

container{

 input container{
   input  
 }
 
 main container{
   topgrid-{ 
     topleft{city,main weather,now,temp}
     topright{icon ,time, day and date}
    }

    bottomgrid{
      left-grid{}
      right -grid{}
    }  
  }

}

1. https://demo.w3layouts.com/demos_new/16-02-2017/aridity_weather_widget-demo_Free/315271637/web/index.html#parentHorizontalTab3
2. weather-icons  https://cssdeck.com/labs/ten-animated-weather-glyphs-skycons?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+cssdeck+%28CSSDeck%29
3. world time using timezone -http://worldtimeapi.org/api/http://worldtimeapi.org/api/
4. one call api - https://openweathermap.org/api/one-call-api
*/