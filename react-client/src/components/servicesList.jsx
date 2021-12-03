import React from 'react';

const ServicesList= (props) => (
  // <div>
  //   { props.item.description }
  // </div>
  <div>
  <h3>{props.service.title}</h3>
  <img src={props.service.imageUrl} className="service-image"/>
  <h4>{props.service.type}</h4> 
  <h4>{props.service.price}</h4> 
  <button>Add</button>
  <button>remove</button>
  </div>
)

export default ServicesList;