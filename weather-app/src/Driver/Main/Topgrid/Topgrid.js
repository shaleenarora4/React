import React from 'react';
import Topleft from './Topleft';
import Topright from './Topright';

function Topgrid(props){
    return(
        <div className='topgrid row'>
            <Topleft location={props.location} alldata={props.alldata}/>
            <Topright alldata={props.alldata}/>
        </div>
    )
}

export default Topgrid;