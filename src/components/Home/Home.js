import React from 'react';
import Banner from '../Banner/Banner';
import SafeTours from '../SafeTours/SafeTours';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SafeTours></SafeTours>
            <Service></Service>
        </div>
    );
};

export default Home;