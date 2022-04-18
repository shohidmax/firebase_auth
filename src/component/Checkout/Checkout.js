import { queryAllByAttribute } from '@testing-library/react';
import React from 'react';

const Checkout = () => {
    
    function handleThanks() {
        alert("Thank you for Booking");
      }
    return (
        <div>
            <h1>Please fill the form to Get your service</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                    <form className='border p-3'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"> Your Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Your Mobile Number</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

                        </div>
                        
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" onClick={handleThanks} className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    <div className='col-md-4'></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Checkout;