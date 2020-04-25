import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div className='about'>
                <div className='about-content'>
                    <h1><Fade bottom cascade>About.</Fade></h1>
                    <Fade bottom>
                        <p style = {{textIndent: "5em"}}>{data.abouttext}</p>
                        <p style = {{textIndent: "5em"}}>{data.second}</p>
                        <p style = {{textIndent: "5em"}}>{data.third}</p>
                        <p style = {{textIndent: "5em"}}>{data.fourth}</p>
                    </Fade>
                </div>
            </div>  
        );
    }
}
 
export default About;