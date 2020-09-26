import React, {Component} from 'react';
import {Featured} from './Featured';
import { Row, Col, Container } from "react-bootstrap";
import './CaseStudies.css';

class CaseStudies extends Component {
    render() {
        return(
            <>
            <p className="fw">FEATURED WORK</p>
            <Row>
            {Featured.map((item,index) => {
                        return (
                            
                            <Col xs={10} md={7} lg={5} xl={4} key={index}>
                                <div className="underView">
                                    <img className="feature" src={item.image} alt={item.alt}/>
                                    
                                    
                                    <p className="itemtitle">{item.title}</p>
                                    <p className="caption">{item.subtitle}</p>
                                    <a href={item.url} onClick={this.handleClick} className="view">VIEW <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                    
                                </div>
                            </Col>
                            
                        )
                    })}
            </Row>
            </>
        )
    }
}

export default CaseStudies;
