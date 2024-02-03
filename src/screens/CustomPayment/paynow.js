import React, { useEffect, useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import Logo from '../../assets/images/dipixelsold.png'
import axios from 'axios';
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Stipe from './Card-Minimal'
import '../../styles/home/index.css'
import Config from '../../config'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51IbLW1FjRdo7TsYeHoisscniQYMiRJYMYI9myNWsY8OPZABP9mrs4Gvz4LJfzk16LEG0Hi0CBTqh5IsqbU2o6KgA00XsIZBfAw');



function CustomPayment(props) {
  const [close, setClose] = useState(true)
  const id = props.match.params.id
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get(`${Config}/api/payment/${id}`)
      .then((response) => {
        setData(response.data)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // console.log(data)
  console.log(data)
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  // Stripe Payment Method
  const ProductDisplay = ({ handleClick }) => (<>

    {!close ? <Success /> : null}
    {data !== '' ?
      (
        <div className="paymentHeader">

          <div className="paymentPage">
            <div className="LogoBody">
              <img className="Logo" src={Logo} />
            </div>
           
            <div className="paymentSkull">
              <div className="setCurrency"> {data.currency == 'USD' ? '$': ' '} {data.currency == 'CAD' ? '$': ' '} {data.currency === 'GBP' ? '£': ' '}</div>
              <div className="setPayment"> {data.amount}.00</div>
              {/* <div className="setPayment">${data.packagePrice}</div> */}
            </div>
            <div className="payDesc">
              <b>Description: </b>
              <p>{data.description}</p>
            </div>
            
            <button className="view" style={{display:'flex', marginBottom:'10%'}} type="button" id="checkout-button" role="link" onClick={handleClick}>
                <span style={{textAlign:'center', width:'100%'}}>Checkout</span>
            </button>

          </div>
        </div>
      ) : null}
  </>)


  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    console.log("service is working")

    const response =await axios.post(`${Config}/api/payment/create-checkout-session/`,
    {
      domain: 'https://www.dipixels.com/checkout',
        currency: data.currency,
        amount: parseInt(data.amount)*100,
        quantity: 1,
        paymentMode: 'payment'
    }
    )
    const session = await response;
    

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.data.id,
    });

    if (result.error) {
      console.log('Error')
    }
  };

  function Success({ State }) {


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
  const path = window.location.pathname

  if (path.substring(0, 15) == '/paywith_paypal') {
    return (<>
      {!close ? <Success /> : null}
      {data !== '' ?
        (
          <div className="paymentHeader">

            <div className="paymentPage">

              <div className="LogoBody">
                <img className="Logo" src={Logo} />
              </div>
              <div className="paymentSkull">
              <div className="setCurrency"> {data.currency == 'USD' ? '$': ' '} {data.currency == 'CAD' ? '$': ' '} {data.currency === 'GBP' ? '£': ' '}</div>
              <div className="setPayment"> {data.amount}.00</div>
              {/* <div className="setPayment">${data.packagePrice}</div> */}
            </div>
            <div className="payDesc">
              <b>Description: </b>
              <p>{data.description}</p>
            </div>
              <PayPalButton
                style={{
                  label: 'paypal'
                }}
                amount={data.amount}
                //   amount={packagePrice}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {

                  setClose(false)

                }}
                options={{
                  clientId: "AXYeWSpC1OF72B4kpm19guklDSQZ4o-hUU7GSrDeGp9z9Zh5vZBh-GWR694jq4U1-PQn4EJkzg6GDGeZ",
                  components: ['buttons', 'marks'],
                  currency: data.currency,
                  disableFunding: 'credit',
                }}
              // clientId: "IDAfTHll0jiLSM4XP1Ec2BpafbVfj5RKSngp1yrRrdAzMCQjrA1ds1uW1xi1ghLOm32dk2y1maPD3uHZ83Secret KEYEOGY44FcitVtGiDqE_HNsMQ-k3jru9V9dyLU2PWCKVamfQ8ZiTUoe2tnPk5cuZ4A0uAKGeaNCUfmvIHS"}}
              />

            </div>
          </div>
        ) : null}
    </>)
  }
  else {


    return message ? (
      <Message message={message} />
    ) : (
      <ProductDisplay handleClick={handleClick} />
    );

  }
}

export default CustomPayment
