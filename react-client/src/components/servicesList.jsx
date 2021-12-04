import React from 'react';
const style10={
  borderRadius:' 12px',
  backgroundColor: 'yelow',
  border: 'none',
  color: 'black',
  padding:' 10px 50px',
  texAlign:' center',
  display: 'inline-block',
  fontSize:' 16px',
  margin: '4px 2px',
  cursor: 'pointer',
  display: 'center',
}
const style12={
  display: 'center',
  marginLeft:' 35%',
  marginRight: '25%',
  textRlign: 'center',
}
const sttyle13={
  display: 'center',
  color:' purple',
  fontSize:' 30px',
  marginLeft:' 25%',
  marginRight: '25%',
}
const ServicesList= (props) => (
  // <div>
  //   { props.item.description }
  // </div>
  <div style={style12}>
  <h3 style={sttyle13}>{props.service.title}</h3>
  <img src="https://www.referenceur.be/wp-content/uploads/2012/07/service-client-logo.jpg" className="service-image"/>
  <h4>{props.service.type}</h4> 
  <h4>{props.service.price}</h4> 
  <button style={style10}>Add</button>
  <button style={style10} onClick={()=>{props.delete(props.service._id)}}>remove</button>
  </div>
)

export default ServicesList;