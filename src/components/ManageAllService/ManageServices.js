import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ManageServices = () => {
    const [services, setServices] = useState([])
    const [isDeleted, setDeleted] = useState(null)

    useEffect(()=>{
        fetch("https://polar-dawn-85433.herokuapp.com/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[isDeleted])
    console.log(services)
    const handleDelete = id => {
        const url = `http://localhost:4000/deleteService/${id}`
        console.log(url)
        fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        })
        .then(res=>res.json())
        .then(result => {
            if(result.deleteCount){
                alert('deleted')
                setDeleted(true)
            }
            else{
                setDeleted(false)
            }
        })
    }
    return (
        <div>
            <h1>Manage All Services</h1>
            <div className="all-products">
               <div className="container">
               <div className="row text-center">
                    {
                       services.map(pd=>(
                        <div className="col-md-4">
                            <div className="product border border p-2 m-2">
                                <h5><img className="img" src={pd?.image} alt="" /></h5>
                                <h5>Name : {pd?.name}</h5>
                                <h5>Description :{pd?.about}</h5>
                                <button onClick={()=>handleDelete(pd?._id)} className="btn btn-danger m-2">Delete</button>
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

export default ManageServices;