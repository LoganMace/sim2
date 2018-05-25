import React from 'react';

import './House.css'

export default function House(props){
  // console.log(props);
  return(
    <div className='House'>
      <div className='house-card'>
        <p>Property Name: {props.property_name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
        <button className='delete-house' onClick={() => props.removeHouse(props.id)}>Delete</button>
      </div>
    </div>
  )
}