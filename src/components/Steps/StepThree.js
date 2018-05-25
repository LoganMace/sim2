import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import {updatePrices} from '../../ducks/reducer';

class StepThree extends Component{

  constructor(props){
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0
    }

    this.rentHandler = this.rentHandler.bind(this);
    this.addHouseHandler = this.addHouseHandler.bind(this);
  }


  mortgageHandler(e){
    this.setState({
      mortgage: e.target.value
    })
  }

  rentHandler(e){
    this.setState({
      rent: e.target.value
    })
  }

  addHouseHandler(property_name, address, city, state, zip){
    console.log(property_name);
    axios
      .post('/api/houses', {property_name, address, city, state, zip})
      .then(response => console.log(response))
      .catch(console.log);
  }


  render(){
    const {updatePrices} = this.props;

    return(
        <div className='price-inputs'>
          <p>Monthly Mortgage Amount: <input type="text" value={this.state.mortgage} onChange={(e)=>this.mortgageHandler(e)}/></p>
          <p>Desired Monthly Rent: <input type="text" value={this.state.rent} onChange={(e)=>this.rentHandler(e)}/></p>
          <Link to='/'> 
          <button className='complete' 
          // onClick={() => this.addHouseHandler(this.state.propertyName, this.state.address, this.state.city, this.state.state, this.state.zip)}
          onClick={()=>updatePrices(this.state.mortgage, this.state.rent)}
          >Complete</button>
          </Link>
        </div>

    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {updatePrices})(StepThree);