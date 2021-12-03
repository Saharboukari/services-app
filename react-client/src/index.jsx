import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Service from './components/service.jsx';
// import Carousel from './components/Carousel.jsx';
import Client from './components/Client.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     services : []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/', 
  //     success: (data) => {
  //       this.setState({
  //        services : data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>  
      <h1>test
      </h1>
       <Client/>
      {/* <h1>Service list</h1> */}
      {/* <Service services={this.state.services}/> */}
      {/* <Carousel/> */}
      
       
      
   
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));