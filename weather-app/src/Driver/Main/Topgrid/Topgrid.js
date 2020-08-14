import React from 'react';
import Topleft from './Topleft';

function Topgrid(props){
    
    return(
        <div className='topgrid'>
            <Topleft location={props.location} dailyData={props.dailyData}/>
            {/* <TopRight/> */}
        </div>
    )
}

export default Topgrid;