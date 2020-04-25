import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ReactCardFlip from 'react-card-flip';
import Description from './description';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    render() { 
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" key={this.props.id}>
                <Fade bottom>
                    <div className='project'>
                        <a href={this.props.url}>
                            <img src={this.props.imageSrc} alt={this.props.title}></img>
                        </a>
                        <h1>{this.props.title}</h1>
                        <span>{this.props.service}</span>
                        <div>
                            <button className='button' onClick={this.handleClick}>View description</button>
                        </div>
                    </div> 
                </Fade>
                <div className=''>
                    <Description     
                        service={this.props.description.service}
                        onClick={(e) => this.handleClick(e) }
                    />
                </div>
            </ReactCardFlip>
        );
    }
}
 
export default Project;