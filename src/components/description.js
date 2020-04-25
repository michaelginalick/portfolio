import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Description extends Component {
    state = {  }
    render() { 
        return ( 
          <div className='description'>
              <h2>{this.props.service}</h2>
              <button className='button' onClick={this.props.onClick}>View Details</button>
          </div> 
        );
    }
}
 
export default Description;