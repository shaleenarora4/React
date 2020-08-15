import React from 'react';
import Topleft from './Topleft';
import Topright from './Topright';

function Topgrid(props){
    
    return(
        <div className='topgrid'>
            <Topleft location={props.location} dailyData={props.dailyData}/>
            <Topright dailyData={props.dailyData}/>
        </div>
    )
}

export default Topgrid;