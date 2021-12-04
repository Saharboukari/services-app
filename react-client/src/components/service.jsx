import React from 'react';
import ServicesList from './ServicesList.jsx';
const style7={
  textAlign:'center',
 fontSize: '35px',
}
const style8={
  textAlign:'center',
 fontSize: '30px',
}
const Service = (props) => (
  <div className="listCountainer">
    <h4 style={style7}> Find your service </h4>
   <h5 style={style8}> There are { props.services.length } services.</h5>
    { props.services.map((service,index) => <ServicesList service={service} key={index} delete={props.deleteService}/>)}
    
  </div>
)

export default Service;