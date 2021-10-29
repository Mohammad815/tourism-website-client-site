import React, { useEffect, useState } from 'react';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1>All Services</h1>
            <div className="all-products">
               <div className="container">
               <div className="row text-center">
                    {
                       services.map(pd=>(
                        <div className="col-md-4">
                            <div className="product border border p-2 m-2">
                                <h5>{pd?.name}</h5>
                                <h5>{pd?.price}</h5>
                                <h5><img className="img" src={pd?.image} alt="" /></h5>
                                {/* <button onClick={()=>handleDelete(pd?._id)} className="btn btn-danger m-2">Delete</button> */}
                               {/* <Link to={`/update/${pd._id}`}>
                                  <button className="btn btn-danger m-2">Update</button>
                               </Link> */}
                                {/* <button className="btn btn-danger m-2">Buy Now</button> */}
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