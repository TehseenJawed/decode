import React, { useEffect, useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import '../../../styles/innerpages/paypal/style.css';
import Logo from '../../../assets/images/dipixelsold.png'
import axios from 'axios';
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function PaymentForm(props) {
  const { packagePrice, next, name, formData } = props

  const [email, setEmail] = formData.Email
  const [bname, setBName] = formData.BName
  const [refIdea, setRefIdeas] = formData.RefIdea
  const [brief, setBrief] = formData.Brief
  const [audience, setTargetAudience] = formData.TargetAudience
  return (
    <div className="paymentHeader">
      <div className="paymentPage">
        <div className="tab1 tabActive">PROVIDE YOUR BUSINESS DETAIL</div>
        <div className="tab1">PAYMENT METHOD</div>
        <form onSubmit={() => next(1)}>
        <input className="inputFields" placeholder={name} disabled type="text" alt="" />
        <input className="inputFields" placeholder={`$${packagePrice}`} disabled type="text" alt="" />
        <input className="inputFields" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" alt="" required/>
        <input className="inputFields" value={bname} onChange={(e) => setBName(e.target.value)} placeholder="Business Name" type="text" alt=""  required/>
        <input className="inputFields" value={refIdea} onChange={(e) => setRefIdeas(e.target.value)} placeholder="Reference Ideas" type="text" alt=""  required/>
        <input className="inputFields" value={brief} onChange={(e) => setBrief(e.target.value)} placeholder="Brief" type="text" alt=""  required/>
        <input className="inputFields" value={audience} onChange={(e) => setTargetAudience(e.target.value)} placeholder="Targeted Audience" type="text" alt=""  required/>
        <button className="nextButton" type="submit">Next</button>
        </form>
      </div>
    </div>
  )
}
function Success({ State }) {

  useEffect(() => {
   
  }, [State])
  return (<div style={{ display: "relative" }} className="successMessage">
    <div className='successBox'>
      <div>
        <AiFillCheckCircle style={{ color: "green" }} size="100" />
      </div>
      <h3 className="message">We have received your payment successfully. You will hear from us very soon.</h3>
      <Link to="/packages"><h5 className="newpackages">Back to Packages</h5></Link>
    </div>
  </div>)
}

function PayPal(props) {
  const { packagePrice, formData, name, Close, changePayment } = props

  const [email, setEmail] = formData.Email
  const [bname, setBName] = formData.BName
  const [refIdea, setRefIdeas] = formData.RefIdea
  const [brief, setBrief] = formData.Brief
  const [audience, setTargetAudience] = formData.TargetAudience
  
  const FormObject = {
    name: name,
    price: packagePrice,
    businessName: bname,
    referenceIdea: refIdea,
    brief: brief,
    targetedAudience: audience,
    email: email
  }
  
  return (
    <div className="paymentHeader">
      
      <div className="paymentPage">
        <div className="tab1" >PROVIDE YOUR BUSINESS DETAIL</div>
        <div className="tab1 tabActive">PAYMENT METHOD</div>
        <div className="LogoBody">
          <img className="Logo" src={Logo} />
        </div>
        <div className="paymentSkull">

          <div className="setPayment">${packagePrice}</div>
        </div>
        <PayPalButton
          style={{
            label: 'paypal'
          }}
          amount={packagePrice}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            axios.post("https://lit-reef-94777.herokuapp.com/api/mail", FormObject)
              .then((response) => {
                changePayment(false)
              })
              .catch((error) => {
                alert("Transaction completed by " + details.payer.name.given_name + " but record has not been saved. ");
              })

            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          }}
          options={{
            clientId: "AXYeWSpC1OF72B4kpm19guklDSQZ4o-hUU7GSrDeGp9z9Zh5vZBh-GWR694jq4U1-PQn4EJkzg6GDGeZ",
            components: ['buttons', 'marks'],
            disableFunding: 'credit',
          }}
        // clientId: "IDAfTHll0jiLSM4XP1Ec2BpafbVfj5RKSngp1yrRrdAzMCQjrA1ds1uW1xi1ghLOm32dk2y1maPD3uHZ83Secret KEYEOGY44FcitVtGiDqE_HNsMQ-k3jru9V9dyLU2PWCKVamfQ8ZiTUoe2tnPk5cuZ4A0uAKGeaNCUfmvIHS"}}
        />

      </div>
    </div>
  )
}
export default function MainForm(props) {
  const Email = useState("")
  const BName = useState("")
  const RefIdea = useState("")
  const Brief = useState("")
  const [close, setClose] = useState(true)
  const TargetAudience = useState("")
  
  const { packageValue, packageName } = props.location.state
  const [form, setForm] = useState(0)
  useEffect(() => {
  }, [close]);

  if (form == 0) {
    return (
      
      <PaymentForm formData={{ Email, BName, RefIdea, Brief, TargetAudience }} next={setForm} packagePrice={packageValue} name={packageName} />
      // <PayPal data={packageValue} />
    )
  }
  else {
    return (<>
    {!close ? <Success /> : null }
      <PayPal changePayment={setClose} Close={close} formData={{ Email, BName, RefIdea, Brief, TargetAudience }} name={packageName} packagePrice={packageValue} />
    </>)
  }
}