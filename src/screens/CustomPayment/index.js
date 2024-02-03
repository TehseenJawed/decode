import React, { useState } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Config from '../../config'
function CustomPayment() {
  const [loaderFlag, setLoaderFlag] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [link, setLink] = useState("  ");
  const [paymentMethod, setpaymentMethod] = useState("  ");
  function GenerateLink(event) {
    event.preventDefault();
    setLoaderFlag(!loaderFlag);
    const newObj = {
      title,
      description,
      amount,
      currency,
    };
    axios
      .post(`${Config}/api/payment`, newObj)
      .then((response) => {
        setLink(
          "https://www.dipixels.com/" + paymentMethod + "/" + response.data.id
        );
        setLoaderFlag(false);
      })
      .catch((err) => {
        setLoaderFlag(false);
        console.log("Error");
      });
  }
  function Loader() {
    return (
      <div className="LoaderBody">
        <CircularProgress />
      </div>
    );
  }
  function CopyText() {
    var copyText = document.getElementById("getLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  return (
    <>
      <div className="customPayment">
        <div className="customFont">
          <div className="customHeader">BUILD PACKAGE</div>
          <form onSubmit={GenerateLink} className="customSetFont">
            <label className="customLabel">Title</label>
            <input
              className="customText"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <label className="customLabel">Description</label>
            <textarea
              rows="4"
              cols="50"
              className="customText"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Description"
              required
            />
            <label className="customLabel">Amount</label>
            <input
              className="customText"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="text"
              placeholder="Amount"
              required
            />
            <label className="customLabel">Currency</label>
            <select
              className="customText"
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              {/* <option selected>Select</option> */}
              <option value="USD" selected>
                USD
              </option>
              <option value="CAD">CAD</option>
              <option value="GBP">GBP</option>
            </select>
            <div className="customText paymentMethod">
              <div>
                <input
                  type="radio"
                  id="paymentmethod"
                  name="gender"
                  required
                  onChange={() => setpaymentMethod("paywith_stripe")}
                />
                <label for="paymentmethod">Pay with Stripe</label>
                <br />
              </div>
              <div>
                <input
                  type="radio"
                  id="paymentmethod"
                  name="gender"
                  required
                  onChange={() => setpaymentMethod("paywith_paypal")}
                />
                <label for="paymentmethod">Pay with PayPal</label>
                <br />
              </div>
            </div>
            {loaderFlag ? (
              <Loader />
            ) : (
              <>
                <input
                  className="getLink"
                  id="getLink"
                  type="text"
                  value={link}
                  placeholder="Amount"
                  required
                />
                <button type="submit" onClick={CopyText} className="copyButton">
                  Copy
                </button>
              </>
            )}

            <button type="submit" className="customButton">
              GET LINK NOW
            </button>
            {/* <div className="buttonText"> */}
            {/* </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default CustomPayment;
