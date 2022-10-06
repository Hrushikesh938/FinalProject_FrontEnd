import React from "react"
import Footer from "./footer";
import Header from "./header";
import { useCart } from 'react-use-cart';
import { useNavigate } from "react-router-dom";

function Checkout(){

    const navigate=useNavigate();

    const {
        emptyCart,
    } = useCart();

    const PlaceOrder=()=>{

        alert("order placed succesfully");
        emptyCart();
        navigate("/home")
    }
return(
    <div>
        <Header/>
        <h1>Enter Card details</h1>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>
        
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input>
            <button onClick={e => PlaceOrder(e)}>Submit</button>
        <Footer/>
    </div>
)
} 

export default Checkout;