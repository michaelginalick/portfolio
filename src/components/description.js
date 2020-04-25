import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Description extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
          <div className='project'>
              <h1>{this.props.service}</h1>
              <button className='button' onClick={this.props.onClick}>View Details</button>
          </div> 
        </Fade>);
    }
}
 
export default Description;