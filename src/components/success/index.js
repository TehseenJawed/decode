import React from 'react';
import {Link} from 'react-router-dom'
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'

export default function Success({history}) {
    if(history.location.search == "?success=true"){
        return (
            <div style={{ display: "relative" }} className="successMessage">
              <div className='successBox'>
                <div>
                  <AiFillCheckCircle style={{ color: "green" }} size="100" />
                </div>
                <h3 className="message">We have received your payment successfully. You will hear from us very soon.</h3>
                <Link to="/packages"><h5 className="newpackages">Back to Packages</h5></Link>
              </div>
            </div>
            )
    }
    else if(history.location.search == "?canceled=true"){
        return (
            <div style={{ display: "relative" }} className="successMessage">
              <div className='successBox'>
                <div>
                  <AiFillCloseCircle style={{ color: "red" }} size="100" />
                </div>
                <h3 className="message" style={{color:'red'}}>We are getting problem processing your payment. Kindly follow the different payment options.</h3>
                <Link to="/packages"><h5 className="newpackages">Back to Packages</h5></Link>
              </div>
            </div>
            )
    }
    
  }