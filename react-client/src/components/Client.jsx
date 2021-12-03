// import React from 'react';
// import axios from "axios";

// class Client  extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         firstName:"",
//         lastName:"",
//         Adress:"",
//         PhoneNumber:""
//       }
//       this.handleChange = this.handleChange.bind(this);
//     }
//     handleSubmit(event) {
//         event.preventDefault();
//         axios.post("/client", this.state).then(({ data }) => {
//           this.props.addclient(data);
//         });
//     }
// render(){
//     return(
// <div>
// <form>
//   <label>
//     FirstName :
//   </label><br></br>
//   <input type="text" name="firstName" value={this.state.lastName} onChange={this.handleChange} /><br></br>
//   <label>
//     LastName :
//   </label><br></br>
//   <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}  /><br></br>
//   <label>
//     Adress :
//   </label><br></br>
//   <input type="text" name="Adress" value={this.state.Adress}onChange={this.handleChange}  /><br></br>
//   <label>
//     PhoneNumber :
//   </label><br></br>
//   <input type="Number" name="PhoneNumber" value ={this.state.PhoneNumber} onChange={this.handleChange} /><br></br>
//   <button type="submit" onClick={this.handleSubmit.bind(this)} >subscribe</button>
// </form>
// </div>
// )
// }
//  }
//  export default Client ;