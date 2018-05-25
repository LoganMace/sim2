import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { Route } from 'react-router-dom';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';

class Wizard extends Component{

  // constructor(props){
  //   super(props);
    // this.state = {
    //   propertyName: '',
    //   address: '',
    //   city: '',
    //   state: '',
    //   zip: 0
    // }
    // this.propNameHandler = this.propNameHandler.bind(this);
    // this.addressHandler = this.addressHandler.bind(this);
    // this.cityHandler = this.cityHandler.bind(this);
    // this.stateHandler = this.stateHandler.bind(this);
    // this.zipHandler = this.zipHandler.bind(this);
    // this.addHouseHandler = this.addHouseHandler.bind(this);
  // }


  // propNameHandler(e){
  //   this.setState({
  //     propertyName: e.target.value
  //   })
  // }
  // addressHandler(e){
  //   this.setState({
  //     address: e.target.value
  //   })
  // }
  // cityHandler(e){
  //   this.setState({
  //     city: e.target.value
  //   })
  // }
  // stateHandler(e){
  //   this.setState({
  //     state: e.target.value
  //   })
  // }
  // zipHandler(e){
  //   this.setState({
  //     zip: e.target.value
  //   })
  // }

  // addHouseHandler(property_name, address, city, state, zip){
  //   console.log(property_name);
  //   axios
  //     .post('/api/houses', {property_name, address, city, state, zip})
  //     .then(response => console.log(response))
  //     .catch(console.log);
  // }

  render(){

    return(
      <div>
        <div>Wizard</div>
        <Link to='/'>  
          <button className='cancel'>Cancel</button>
        </Link>
        <Route component={StepOne} path='/wizard/one'/>
        <Route component={StepTwo} path='/wizard/two'/>
        <Route component={StepThree} path='/wizard/three'/>
        {/* <div className='property-inputs'>
          <p>Property Name: <input type="text" value={this.state.propertyName} onChange={(e)=>this.propNameHandler(e)}/></p>
          <p>Address: <input type="text" value={this.state.address} onChange={(e)=>this.addressHandler(e)}/></p>
          <p>City: <input type="text" value={this.state.city} onChange={(e)=>this.cityHandler(e)}/></p>
          <p>State: <input type="text" value={this.state.state} onChange={(e)=>this.stateHandler(e)}/></p>
          <p>Zip: <input type="text" value={this.state.zip} onChange={(e)=>this.zipHandler(e)}/></p>
        </div> */}
        {/* <Link to='/'> 
          <button className='complete' onClick={() => this.addHouseHandler(this.state.propertyName, this.state.address, this.state.city, this.state.state, this.state.zip)}>Complete</button>
        </Link> */}
      </div>
    )
  }

}

export default Wizard;