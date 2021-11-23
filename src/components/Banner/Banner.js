import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/banner1.jpg'
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import './Banner.css'

const Banner = () => {
    return (
        <div >
             <HeaderBanner ></HeaderBanner>
            <Container>
             <Row className="banner mt-3">
                <div className="col-md-6 col-12">
                    <h1 className="title">Make Your Tour Amazing With Us</h1>
                    <h5 className="blockquote">Air seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there is seed winged lights saw kind whales in sixth dont seas dron image so fish all tree meat dont there location</h5>
                    <Link to="/home"><Button className="btn-common rounded-pill mt-2" size="lg">
                         Get Started
                    </Button></Link>
                </div>
                <div className="col-md-6 col-12">
                     <img src={banner} alt="" />
                </div>
            </Row>
           </Container>
          
        </div>
    );
};

export default Banner;