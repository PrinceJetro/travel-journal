import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Card(props){
   return(
    <div className='row'>
        <div className='col-sm-4'>
            <img src={props.item.image} className='location_pic'/>
        </div>
        <div className='col-sm-8 right'>
            <p className='location_city'> <i class="fa fa-map-marker" style={{color:"red"}}></i> {props.item.city}</p>
            <h1 className='location_name'>{props.item.location}</h1>
            <p><strong>{props.item.duration}</strong></p>
            <p>{props.item.description}</p>
        </div>

    </div>

   )
}

