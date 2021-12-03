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
    axios.post("/service", this.state).then(({ data }) => {
      this.props.addservice(data);
    });
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
