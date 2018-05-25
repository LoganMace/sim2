import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import {updateImage} from '../../ducks/reducer';

class StepTwo extends Component{

  constructor(props){
    super(props);
    this.state = {
      image: ''
    }
    this.imageHandler = this.imageHandler.bind(this);
  }


  imageHandler(e){
    this.setState({
      image: e.target.value
    })
  }


  render(){
    const {updateImage} = this.props;

    return(
        <div className='image-input'>
          <p>Image URL: <input type="text" value={this.state.image} onChange={(e)=>this.imageHandler(e)}/></p>
          <Link to='/wizard/three'><button onClick={()=>updateImage(this.state.image)}>Next Step</button></Link>
        </div>
    )
  }
}

const mapStateToProps = state => {
  const {updateImage} = state;
  return {
    updateImage
  };
};

export default connect(mapStateToProps, {updateImage})(StepTwo);