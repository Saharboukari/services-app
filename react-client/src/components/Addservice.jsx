import React from "react";
import axios from "axios";

class Addservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "",
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
      <div>
        <form>
          <label>Title :</label>
          <br></br>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Type :</label>
          <br></br>
          <input
            type="text"
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Image :</label>
          <br></br>
          <input
            type="url"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}/>
          <br></br>
          <label>Price :</label>
          <br></br>
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br></br>
          <button type="submit" onClick={this.handleSubmit.bind(this)}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default Addservice;
