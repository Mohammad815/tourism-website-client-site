import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './SafeTours.css'
import img from '../../images/tours.jpg'

const SafeTours = () => {
    return (
        <div className="m-5">
            <Container>

             <Row className="banner mt-3">
             <div className="col-md-6 col-12">
                     <img className="img-fluid rounded" src={img} alt="" />
                </div>
                <div className="col-md-6 col-12">
                    <h1 className="title">Make Your Tour Memorable and Safe With Us</h1>
                    <h5 className="blockquote mt-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
                   <div className="row tours mt-5">
                        <div className="col-md-4">
                            <h4 className="text-info">300</h4>
                            <p>Successful Tours</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-info">2100</h4>
                            <p>Happy Tourist</p>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-info">200</h4>
                            <p>Place Explored</p>
                        </div>
                   </div>
                   
                </div>
               
            </Row>
           </Container>
        </div>
    );
};

export default SafeTours;