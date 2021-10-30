import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("https://polar-dawn-85433.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div>
            <h1 className="service-header m-3 mb-5">Our Popular Services</h1>
            <div className="all-products">
               <div className="container">
               <div className="row text-center">
                    {
                       services.map(pd=>(
                        <div className="col-md-4">
                            <div className="product border border p-2 m-2  bg-light">
                                <h5><img className="img" src={pd?.image} alt="" /></h5>
                                <p>Name : {pd?.name}</p>
                                <p>Description :{pd?.about}</p>
                              
                                <Link to={`/order/${pd?._id}`}><button className="btn btn-primary m-2">Book Now</button></Link> 
                               
                               {/* <Link to={`/update/${pd._id}`}>
                                  <button className="btn btn-danger m-2">Update</button>
                               </Link> */}
                               
                            </div>
                         </div>
                       )) 
                    }
                </div>
               </div>
            </div>
        </div>
    );
};

export default Service;