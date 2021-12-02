import React from 'react';
import ServicesList from './servicesList.jsx';

const Service = (props) => (
  <div>
    
    <h4> Srvice Component </h4>
    There are { props.services.length } services.
    { props.services.map(service => <ServicesList service={service}/>)}

  </div>
)

export default Service;