import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state = {
      houseList: []
    }
    this.getHouseList = this.getHouseList.bind(this);
    this.removeHouseHandler = this.removeHouseHandler.bind(this);
  }

  componentDidMount(){
    this.getHouseList();
  }

  getHouseList(){
    axios
      .get('/api/houses')
      .then(response => {
        // console.log(response);
        this.setState({
          houseList: response.data
        })
      })
  }

  removeHouseHandler(id){
    // console.log(id);
    axios
      .delete(`/api/houses/${id}`)
      .then(this.getHouseList());
  }

  render(){

    let houses = this.state.houseList.map((house) => (
      <House 
        key={house.id}
        id={house.id}
        property_name={house.property_name}
        address={house.address}
        city={house.city}
        state={house.state}
        zip={house.zip}
        removeHouse={this.removeHouseHandler}
      />
    ));

    return(
      <div> 
        <div>Dashboard</div>
        <Link to='/wizard/one'>  
          <button className='add-property'>Add New Property</button>
        </Link>
        {houses}
      </div>
    )
  }

}

export default Dashboard;