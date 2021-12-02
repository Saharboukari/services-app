import React from 'react';

const ServicesList= (props) => (
  // <div>
  //   { props.item.description }
  // </div>
  <div>
  <h3>{props.service.title}</h3>
  <img src={props.service.imageUrl} className="service-image"/>
  {props.service.type} 
  {props.service.price}
  </div>
)

export default ServicesList;