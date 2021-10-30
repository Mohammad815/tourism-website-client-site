import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageAllOrder = () => {
    const [order, setOrder] = useState([])
    const [isDeleted, setDeleted] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:4000/orders")
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[isDeleted])
    console.log(order)
    const handleDelete = id => {
        const url = `http://localhost:4000/deleteOrders/${id}`
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
        <h1>All Order</h1>
        <div className="all-products">
           <div className="container">
           <div className="row text-center">
                {
                   order.map(pd=>(
                    <div className="col-md-4">
                        <div className="product border border p-2 m-2">
                          
                            <h5>User Name : {pd?.username}</h5>
                            <h5>Email :{pd?.email}</h5>
                            <h5>City :{pd?.city}</h5>
                            <button onClick={()=>handleDelete(pd?._id)} className="btn btn-danger m-2">Delete</button>
                          
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

export default ManageAllOrder;