import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';


class Work extends Component {
    
    
 

    render() { 
        return (
        <div>
            <h1 className='heading'>
            <Fade bottom cascade>Projects.</Fade></h1>
            <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project
                        id={project[0].id}
                        key={project[0].id}
                        title = {project[0].title}
                        service = {project[0].service}
                        imageSrc = {project[0].imageSrc}
                        url={project[0].url}
                        description={project[1]}
                        onClick={(e) => this.handleClick(e)}
                    />
                ))}
            </div>
        </div>  );
    }
}
 
export default Work;