import React from 'react';
import './Services.css'
import { useForm } from "react-hook-form";

const Services = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
  
        fetch('https://polar-dawn-85433.herokuapp.com/addServices',{
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
        <div>
            <h1>Add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="p-1 mb-2" {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <br />
                <input className="p-1 mb-2" {...register("about")} placeholder='description' />
                <br />
                <input className="p-1 mb-2" {...register("price")} type="number" placeholder='price' />
                <br />
                <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-1 mb-2"
              />
              <br />
                <input className="btn btn-danger px-4" type="submit" />
            </form>
        </div>
    );
};

export default Services;