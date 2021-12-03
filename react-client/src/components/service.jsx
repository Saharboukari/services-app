import React from 'react';
import ServicesList from './ServicesList.jsx';

const Service = (props) => (
  <div>
    <h4> Find your service </h4>
    There are { props.services.length } services.
    { props.services.map((service,index) => <ServicesList service={service} key={index} delete={props.deleteService}/>)}
    
  </div>
)

export default Service;