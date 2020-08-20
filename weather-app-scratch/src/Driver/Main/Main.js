import React from 'react';
import Topgrid from './Topgrid/Topgrid'
import Bottomgrid from './Bottomgrid/Bottomgrid'

function Main(props){
    
    return (
        <div className='main'>
            <Topgrid location={props.location} alldata={props.alldata} />
            <Bottomgrid alldata={props.alldata}/>
        </div>
    );
}

export default Main;
