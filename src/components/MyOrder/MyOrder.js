import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './MyOrder.css'

const MyOrder = () => {
    const {id} = useParams();
    const [singleService, setSingleService] = useState([])

    useEffect(()=>{
        fetch(`https://polar-dawn-85433.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleService(data))
    },[])
    console.log(singleService)
    return (
        <div className = "order">
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={singleService.image} />
            <Card.Body>
                <Card.Title>{singleService.name}</Card.Title>
                <h5>Price : {singleService.price}</h5>
                
            </Card.Body>
            </Card>
            
        </div>
    );
};

export default MyOrder;