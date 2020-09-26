import React from 'react';
import '../../App.css'
import './Home.css';
import { Row, Col, Container } from "react-bootstrap";
import CaseStudies from "../Studies/CaseStudies";

function Home () {
    return (
        <Container fluid className="tophalf">
            <Row>
                <Col>
                    <p className="subtitle">HELLO! KAMUSTA!</p>
                    <div className="aboutme">
                        <span className="darkPurple">My name is Kamille Suayan</span> and I’m passionate about bridging <span className="lightPurple">tech</span>
                        , <span className="lightPurple">design</span>, and <span className="lightPurple">storytelling</span> through my work.
                    </div>
                    <p className="shortBio">I’m a 3rd year Computer Science major and Film and Media Studies minor at 
UC Irvine. I’m interested in UX and Product Design because I believe that
design has the ability to empower others when it is used to advocate for
the needs of all people.</p>

                </Col>
            </Row>
           
            <CaseStudies/>

            

        </Container>
        
            
            
        

    );
}

export default Home;

/*<p className="subtitle">FEATURED WORK</p>*/