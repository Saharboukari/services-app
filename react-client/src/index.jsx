import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Service from './components/Service.jsx';
// import Carousel from './components/Carousel.jsx';
 //import Client from './components/Client.jsx';
import Addservice from './components/Addservice.jsx';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
const style6={
  textAlign:'center',
 fontSize: '40px',
 color:'black'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
     services : []
    }
    this.addservice=this.addservice.bind(this)
    this.deleteService=this.deleteService.bind(this)
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/services', 
      success: (data) => {
        this.setState({
         services : data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  changeView(view, service) {
    this.setState({
      view: view,
      service: service
    });
  }
  
  renderView() {
    const {view} = this.state;
      if (view === 'Service') {
        return <Service services={this.state.services} changeView={this.changeView}/>
      } else if (view === 'Addservice') {
        return <AddserviceService services = {this.state.services}/>
      } 
  }
  addservice(service){
  this.setState({
    services: [...this.state.services, service]
  });
}
deleteService(_id){
  axios.delete(`/delete/${_id}`)
  .then(()=>{
    this.componentDidMount()
  })
  .catch((err)=>{
    console.log(err);
  })
}
// addClient(client){
//   this.setState({
//     services: [...this.state.services, client]
//   });
// }
  render () {
    return (<div>  
       {/* <Carousel/> */}
      {/* <h3>subscribe us client</h3>
       <Client/> */}
       <h3 style={ style6}>Add service</h3>
       <Addservice addservice={this.addservice} />
      <h1  style={ style6}>Service list</h1> 
     <Service services={this.state.services} deleteService={this.deleteService}/> 
     
      {/* <div className="main">
          {this.renderView()}
        </div>
       */}
       
      
   
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));