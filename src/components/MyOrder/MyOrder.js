import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './MyOrder.css'
import userEvent from '@testing-library/user-event';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [singleService, setSingleService] = useState([])

    useEffect(()=>{
        fetch(`https://polar-dawn-85433.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleService(data))
    },[])
    

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
  
        fetch('http://localhost:4000/orders',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"},
            body: JSON.stringify(data),

        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        console.log(data)
    };

    return (
        // <div className = "order">
            
        //     <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={singleService.image} />
        //     <Card.Body>
        //         <Card.Title>{singleService.name}</Card.Title>
        //         <h5>Price : ${singleService.price}</h5>
                
        //     </Card.Body>
        //     </Card>
            
        // </div>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue = {user.displayName} className="p-1 mb-2" {...register("username", { required: true, maxLength: 20 })}  />
                <br />
                
                <input defaultValue = {user.email} className="p-1 mb-2" {...register("email")}  />
                <br />
                <input defaultValue = {singleService.name} className="p-1 mb-2" {...register("placeName")} />
                <br />
                <input  className="p-1 mb-2" {...register("city")}  placeholder='City Name' />
                <br />
                <input  className="p-1 mb-2" {...register("address")}  placeholder='Address' />
                <br />
                <input type="submit" />
      </form>

    );
};

export default MyOrder;