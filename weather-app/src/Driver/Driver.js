import React from 'react';
import Input from './Input/Input';
import Main from './Main/Main';
import './Driver.scss';

class Driver extends React.Component {

  constructor(props) {
    super(props);
    this.state =  { location: 'London' ,
                    dailyData:{"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},
                      "weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"02d"}],
                      "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15}}
                  };
    this.setLocation=this.setLocation.bind(this);
}

changeData=function(url){
  fetch(url).then(res => res.json()).then(data =>this.setState({dailyData: data}));
}

changeUrl=function(location){     
  if(location){
      let updatedUrl='https://api.openweathermap.org/data/2.5/weather?q=city&appid=e43904c5c292d78a35e71ce7973149ed';
      updatedUrl=updatedUrl.replace('city',location);
      this.changeData(updatedUrl);         
  }
}

setLocation=function(resLocation){
  this.setState({location: resLocation}); 
  this.changeUrl(resLocation);             
}

componentDidMount() {
  this.changeData();
}

   render(){
    return (
        <div className='container'>
            <Input setLocation={this.setLocation}/>
            <Main location={this.state.location} dailyData={this.state.dailyData}/>
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
*/