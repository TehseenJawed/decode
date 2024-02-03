import React, { useState } from "react";
import florida from "../../assets/icons/footer/florida.svg";
import karachi from "../../assets/icons/footer/karachi.svg";
import kingdom from "../../assets/icons/footer/united-kingdom.svg";
import dibakar from "../../assets/images/dibakar.png";
import indrajit from "../../assets/images/indrajit.png";
import rohit from "../../assets/images/rohit.png";
import shovan from "../../assets/images/shovan.png";
import sudipto from "../../assets/images/sudipto.png";
import tumpa from "../../assets/images/tumpa.png";
import map from "../../assets/images/map-2.png";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import swal from "sweetalert";
import CancelIcon from '@material-ui/icons/Cancel';


function ContactForm(props) {
  const [floridaState, setflorida] = useState("img");
  const [ukState, setuk] = useState("img");
  const [karachiState, setkarachi] = useState("img");
  const [mainClass, setMainClass] = useState("linking");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [yearnow, setYearnow]=useState(getFullYear());
  const [activename, setActivename] = useState(false);
  const [activeemail, setActiveemail] = useState(false);
  const [activephone, setActivephone] = useState(false);
  const [activemessage, setActivemessage] = useState(false);
  const [hoverpak, setHoverpak] = useState(false);
  const [loading, setLoading] = useState(false);
  
  
  function submitform() {
    console.log("submited");
    if (email !== "" && phone !== "") {
      setLoading(true);
    }
    if (email == "" && phone == "") {
      //alert("Email and Phone are required!");
      swal({
        title: "Something is missing!",
        text: "Make sure you have submitted all the fields.",
        icon: "error",
        button: "OK",
      });
    } else {
      axios
        .post("http://dipixels.com/contact/web_services.php", {
          action: "contact",
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then((res) => {
          console.log(res);
          if (email !== "" || phone !== "") {
          }
          // alert(
          //   "Your message has been submitted. One of our representative will contact you within 24hrs."
          // );
          //swal("Your message has been submitted. One of our representative will contact you within 24hrs.");
          swal({
            title: "Form Submitted Successfully!",
            text: "Your message has been submitted. One of our representative will contact you within 24hrs.",
            icon: "success",
            button: "OK",
          });
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          //setFormsuccess(true);
          props.setform()
        })
        .catch((err) => {
          console.log(err);

          swal({
            title: "Something is missing!",
            text: err,
            icon: "error",
            button: "OK",
          });
        });
    }
    
  }
  return (
    <div className="gform-pop" style={{opacity: props.stateform ? 1 : 0, zIndex: props.stateform ? 99999 : -99 }}>
        <section className="fget">
          <div className="container">
            <h2>Lets Get Started With Your Project</h2>
            <div className="getform">
              <div className="half">
                <h3>
                  We’d Love To Hear<br></br>This is Technology
                </h3>
                <p>
                This is Technology   of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                </p>
                <div className="line"></div>
                <h3>What’s next?</h3>
                <p>One of our Account Managers will contact you shortly</p>
                <div className="user">
                  <div className="box">
                    <div className="img">
                      <img src={shovan} />
                    </div>
                    <span>Shovan</span>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={dibakar} />
                    </div>
                    <span>Dibakar</span>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={rohit} />
                    </div>
                    <span>Rohit</span>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={indrajit} />
                    </div>
                    <span>Indrajit</span>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={sudipto} />
                    </div>
                    <span>Sudipto</span>
                  </div>
                  <div className="box">
                    <div className="img">
                      <img src={tumpa} />
                    </div>
                    <span>Tumpa</span>
                  </div>
                </div>
              </div>
              <div className="half loader-dv">
              <CancelIcon className="cross-Btn" onClick={()=>{props.setform()}}/>
                <div className="loader-container" style={{ opacity: loading ? "1" : "0", zIndex: loading ? "9":"0" }}>
                  <CircularProgress
                    //style={{ display: loading ? "block" : "none" }}
                  />
                </div>
                <form
                  action="JavaScript:void(0)"
                  onSubmit={() => {
                    submitform();
                  }}
                  //style={{ display: loading ? "none" : "block" }}
                >
                  <div className="field">
                    <FaUser
                      style={{ fill: activename ? "#ff764b" : "#c1c1c1" }}
                    />
                    <input
                      type="text"
                      onBlur={() => {
                        setActivename(false);
                      }}
                      onFocus={() => {
                        setActivename(true);
                      }}
                      value={name}
                      placeholder="Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="field">
                    <BsFillEnvelopeFill
                      style={{ fill: activeemail ? "#ff764b" : "#c1c1c1" }}
                    />
                    <input
                      type="email"
                      onBlur={() => {
                        setActiveemail(false);
                      }}
                      onFocus={() => {
                        setActiveemail(true);
                      }}
                      value={email}
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="field">
                    <ImPhone
                      style={{ fill: activephone ? "#ff764b" : "#c1c1c1" }}
                    />
                    <input
                      type="tel"
                      onBlur={() => {
                        setActivephone(false);
                      }}
                      onFocus={() => {
                        setActivephone(true);
                      }}
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="field">
                    <BsFillEnvelopeFill
                      style={{ fill: activemessage ? "#ff764b" : "#c1c1c1" }}
                    />
                    <input
                      type="text"
                      onBlur={() => {
                        setActivemessage(false);
                      }}
                      onFocus={() => {
                        setActivemessage(true);
                      }}
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                  {/* <a href="#">Enquiry Now</a> */}
                  <input type="submit" value="Enquire Now" />
                 
                </form>
              </div>
            </div>
          </div>
        </section>
        
    </div>
  );
}
export default ContactForm;
