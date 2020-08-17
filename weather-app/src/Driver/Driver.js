import React from 'react';
import Input from './Input/Input';
import Main from './Main/Main';
import './Driver.scss';

class Driver extends React.Component {
debugger;
  constructor(props) {
    super(props);
    this.state={
        location:'',
        alldata:{},
    }
    this.setLocation=this.setLocation.bind(this);
}

changeData=function(url,reslocation){  
  fetch(url).then(res => res.json().then(
    (data)=>{
              let loc=reslocation; 
              const {lat,lon}=data.coord;
              let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
              exclude={part}&appid=e43904c5c292d78a35e71ce7973149ed&units=metric`
              fetch(url).then(res=>res.json()).then(data=> this.setState({location: loc,alldata:data})
              );
  })).catch((()=>alert('Sorry,No such Location found')));
}

changeUrl=function(location){     
  if(location){
      let url='https://api.openweathermap.org/data/2.5/weather?q=city&appid=e43904c5c292d78a35e71ce7973149ed';
      url=url.replace('city',location);
      this.changeData(url,location);         
  }
}

setLocation=function(resLocation){
  this.changeUrl(resLocation);             
}


   render(){
    return (
        <div className='container'>
            <div className='Title'>WEATHER APP</div>
            <Input setLocation={this.setLocation}/>
            <Main location={this.state.location}  alldata={this.state.alldata}/>
        </div>
    );
   }
}

export default Driver;
