import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { useParams } from 'react-router';
import './MyOrder.css'

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
  
        fetch('https://polar-dawn-85433.herokuapp.com/orders',{
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