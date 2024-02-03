import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Config from '../../config'
export default function StartForm(props) {
  const [pendingFlag, setPendingFlag] = useState(false);
  const [responseform, setResponse] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  function SubmitSubscription(event) {
    setPendingFlag(true);
    event.preventDefault();
    const newObj = {
      name,
      phoneNumber: phone,
      email,
      address,
    };

    axios
      .post(`${Config}/api/mail/contactUs`, newObj)
      .then((response) => {
        setResponse(true);
        setPendingFlag(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function Response() {
    return (
      <div className="resonseBody">
        <ImCross
                    className="setCrossForm"
                    onClick={() => {
                      setResponse(false);
                      sessionStorage.setItem('formValidate','false')
                    }}
                  />
                  Your Coupon code is First1000. <br />
                  We will be in touch soon
        {/* We have received your response. You will get an email from our one of
        the prefresentative very soon. */}
      </div>
    );
  }
  useEffect(() => {
    if (responseform) {
      setTimeout(() => {
        setResponse(!responseform);
      }, 10000);
    }
  }, [responseform]);
  return (
    <div>
      {props.obj !== null ? (
        <div
          className="gform-pop "
          style={{
            opacity: props.stateform ? 1 : 0,
            zIndex: props.stateform ? 99999 : -99,
            paddding:'10%'
          }}
        >
          <section
            onClick={() => {
              console.log("working");
            }}
            className="fget "
            style={{
            }}
            id="discount-form"
            // style={{ padding: "15%", textAlign: "center" }}
          >
            {responseform ? <Response /> : null}
            <div className="initailForm">
              <div className="setForm">
                <div className="setFormImage"></div>
                <div className="formBody">
                  <ImCross
                    className="setCrossForm"
                    onClick={() => {
                      props.setform();
                      setResponse(false);
                      sessionStorage.setItem('formValidate','false')
                    }}
                  />
                  <form className="mainFormPage" onSubmit={SubmitSubscription}>
                    <input
                      type="text"
                      className="doubleInput"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      required
                    />
                    <input
                      type="number"
                      className="doubleInput"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      required
                    />
                    <input
                      type="email"
                      className="singleInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                    {/* <input
                      type="text"
                      className="singleInput"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      required
                    /> */}
                    {pendingFlag ? (
                      <div style={{ marginTop: "18px" }}>
                        <CircularProgress size={24} />
                      </div>
                    ) : (
                      <button type="submit">Signup Now</button>
                    )}
                    {/* <button type="submit">Signup Now</button> */}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
