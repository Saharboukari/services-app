import React from "react";
import axios from "axios";
const style1={
  height: '400px',
  width: '100%',
  backgroundColor : 'grey'
}
const style2={
   textAlign:'center',
  fontSize: '20px',
  color: 'white'
}
const style3={
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
}
const style4 ={
  width:' 70%',
  backgroundColor: 'white',
  color:' black',
  padding: '14px 20px',
  margin:' 8px 0',
  border: 'none',
  borderRadius:' 4px',
  cursor: 'pointer',
}
const style5={
  display: 'center',
  marginLeft:' 25%',
  marginRight: '25%',
  textRlign: 'center',
}
class Addservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
      imageUrl: '',
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const test={
        title:this.state.title,
        type:this.state.type,
        price:this.state.price
    }
    axios.post("/service", test).then(({ data }) => {
      this.props.addservice(data);
      console.log(data,"hhthth");
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  render() {
    return (
      <div className ="adds" style={style1} >
        <form style ={style5}>
          <label  style={style2}>Title :</label>
          <br></br>
          <input
          style ={style4}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>
          <label  style={style2}>Type :</label>
          <br></br>
          <input
           style ={style4}
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <br></br>
          <label  style={style2}>ImageUrl :</label>
          <br></br>
          <input
           style ={style4}
            type="text"
            name="image"
            value={this.state.imageUrl}
            onChange={this.handleChange}/>
          <br></br>
          <label  style={style2}>Price :</label>
          <br></br>
          <input
           style ={style4}
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br></br>
          <button type="submit" style ={style3} onClick={this.handleSubmit.bind(this)} >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Addservice;
