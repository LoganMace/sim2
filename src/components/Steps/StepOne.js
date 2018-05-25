import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import {updateProperty} from '../../ducks/reducer';


class StepOne extends Component{

  constructor(props){
    super(props);
    this.state = {
      propertyName: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.propNameHandler = this.propNameHandler.bind(this);
    this.addressHandler = this.addressHandler.bind(this);
    this.cityHandler = this.cityHandler.bind(this);
    this.stateHandler = this.stateHandler.bind(this);
    this.zipHandler = this.zipHandler.bind(this);
  }


  propNameHandler(e){
    this.setState({
      propertyName: e.target.value
    })
  }
  addressHandler(e){
    this.setState({
      address: e.target.value
    })
  }
  cityHandler(e){
    this.setState({
      city: e.target.value
    })
  }
  stateHandler(e){
    this.setState({
      state: e.target.value
    })
  }
  zipHandler(e){
    this.setState({
      zip: e.target.value
    })
  }


  render(){
    const {updateProperty} = this.props;

    return(
        <div className='property-inputs'>
          <p>Property Name: <input type="text" value={this.state.propertyName} onChange={(e)=>this.propNameHandler(e)}/></p>
          <p>Address: <input type="text" value={this.state.address} onChange={(e)=>this.addressHandler(e)}/></p>
          <p>City: <input type="text" value={this.state.city} onChange={(e)=>this.cityHandler(e)}/></p>
          <p>State: <input type="text" value={this.state.state} onChange={(e)=>this.stateHandler(e)}/></p>
          <p>Zip: <input type="text" value={this.state.zip} onChange={(e)=>this.zipHandler(e)}/></p>
          <Link to='/wizard/two'><button onClick={()=>updateProperty(this.state.propertyName, this.state.address, this.state.city, this.state.state, this.state.zip)}>Next Step</button></Link>
        </div>
    )
  }
}

const mapStateToProps = state => {
  const {updateProperty} = state;
  return {
    updateProperty
  };
};

export default connect(mapStateToProps, {updateProperty})(StepOne);