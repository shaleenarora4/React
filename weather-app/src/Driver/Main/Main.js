import React from 'react';
import Topgrid from './Topgrid/Topgrid'

function Main(props){
    return (
        <div className='main'>
            <Topgrid location={props.location} dailyData={props.dailyData}/>
            {/* <Bottomgrid/> */}
        </div>
    );
}

export default Main;
