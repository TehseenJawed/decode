import React, { useState } from "react";
import florida from "../../assets/icons/footer/florida.svg";
import karachi from "../../assets/icons/footer/karachi.svg";
import london from "../../assets/icons/footer/united-kingdom.svg";
import Norway from "../../assets/icons/footer/Norway.png";
import Sweden from "../../assets/icons/footer/swedens-flag.jpg";
import axios from "axios";
import swal from "sweetalert";
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { GrTwitter } from 'react-icons/gr';
import { MdPlayArrow } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'
import { FiPhoneIncoming } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineDribbble, AiOutlineInstagram } from 'react-icons/ai';
import './style.css';
import logo from "../../assets/images/dipixels-black.jfif";
import { Link } from 'react-router-dom'
import PayPal from '../../assets/icons/footer/paypal.svg';
import MasterCard from '../../assets/icons/footer/mastercard.svg';
import VisaCard from '../../assets/icons/footer/visa.svg';
import Config from '../../config'
// import 'https://unpkg.com/sweetalert/dist/sweetalert.min.js'
function Footer() {
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
  const [formsuccess, setFormsuccess] = useState(null);

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
        .post(`${Config}/api/mail/contactUs`, {
          action: "contact",
          name: name,
          email: email,
          phoneNumber: phone,
          message: message,
        })
        .then((res) => {
          console.log(res);
          swal({
            title: "Form Submitted Successfully!",
            text: "Your message has been submitted. One of our representative will contact you within 24hrs.",
            icon: "success",
            button: "OK",
          });
          if (email !== "" || phone !== "") {
          }
          // alert(
          //   "Your message has been submitted. One of our representative will contact you within 24hrs."
          // );
          //swal("Your message has been submitted. One of our representative will contact you within 24hrs.");
          // swal({
          //   title: "Form Submitted Successfully!",
          //   text: "Your message has been submitted. One of our representative will contact you within 24hrs.",
          //   icon: "success",
          //   button: "OK",
          // });
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          setLoading(false);
          //setFormsuccess(true);
        })
        .catch((err) => {
          console.log(err);

          // swal({
          //   title: "Something is missing!",
          //   text: err,
          //   icon: "error",
          //   button: "OK",
          // });
        });
    }
  }
  return (
    <>
      <footer>

        <section className={mainClass}>
          <div className="container setTechContainer">
            <div className="location">
              <div className="five">
                <div className="flag">
                  <div className={floridaState}>
                    <img
                      src={florida}
                      onMouseOver={() => {
                        setMainClass("linking red");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span><b>United States</b></span>
                </div>
                <p>
                  <b>Head Office</b> Dallas Texas<br />
                  WI - Wisconsin<br />
                  CA - California<br />
                  FL - Florida<br />
                  IL - Illinois<br />
                </p> <br />
{/* <hr /> */}  
{/* <div className="five"> */}
              <div className="flag">
                  <div className={karachiState}>
                    <img
                      src={london}
                      onMouseOver={() => {
                        setMainClass("linking green");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span><b>UK</b></span>
                </div>
                <p>
                 LDN - London<br />
                </p> <br /> <br />
              <div className="flag">
                  <div className={karachiState}>
                    <img
                      src={Norway}
                      onMouseOver={() => {
                        setMainClass("linking green");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span><b>Norway</b></span>
                </div>
                <p>
                 {/* LDN - London<br /> */}
                </p> <br /> <br />
              <div className="flag">
                  <div className={karachiState}>
                    <img
                      src={Sweden}
                      onMouseOver={() => {
                        setMainClass("linking green");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span><b>Sweden</b></span>
                </div>
                {/* <p>
                 LDN - London<br />
                </p> <br /> <br /> */}
                {/* <div className="flag">
                  <div className={karachiState}>
                    <img
                      src={karachi}
                      onMouseOver={() => {
                        setMainClass("linking green");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span><b>Pakistan</b></span>
                </div>
                <p>
                  KHI - Karachi<br />
                </p> */}
                <div className="five" style={{width:'100%', marginTop:'15%'}}>
                <div className="flag">
                  {/* <span>More Links</span> */}
                </div>
              </div>
                
                
                {/* <p className='payment-Bar'>
                  <img src={PayPal} className='img-bar' alt='PayPal' /><br />
                  <img src={MasterCard} className='img-bar' alt='PayPal' /><br />
                  <img src={VisaCard} className='img-bar' alt='PayPal' /><br />
                </p> */}
                <a
                  href="#"
                  className="big"
                  onMouseOver={() => {
                    setflorida("img bigflag");
                  }}
                  onMouseLeave={() => {
                    setflorida("img");
                  }}
                >
                  {/* Location */}
                </a>
              </div>
              

              {/* <div className="five">
                <div className="flag">
                  <div className={ukState}>
                    <img
                      src={kingdom}
                      onMouseOver={() => {
                        setMainClass("linking blue");
                      }}
                      onMouseLeave={() => {
                        setMainClass("linking");
                      }}
                    />
                  </div>
                  <span>UK Address</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a
                  href="#"
                  className="big"
                  onMouseOver={() => {
                    setuk("img bigflag");
                  }}
                  onMouseLeave={() => {
                    setuk("img");
                  }}
                >
                </a>
              </div> */}

              <div className="five">
              
                
                {/* <a
                  href="#"
                  className="big"
                  onMouseOver={() => {
                    setkarachi("img bigflag");
                  }}
                  onMouseLeave={() => {
                    setkarachi("img");
                  }}
                > */}
                  {/* Location */}
                  <div className="five" style={{width:'100%'}}>
                  <span><b>More Links</b></span>
                  <ul className='footer-links' style={{width:'100%', marginTop:'13%'}}>
                  <Link to='/'><li>   Home </li> </Link>
                  <Link to='/about-us'> <li>   About</li> </Link>
                  <Link to='/services'> <li>    Services </li></Link>
                  <Link to='/case-studies'> <li>    Case Studies </li></Link>
                  {/* <Link to='/packages'> <li>   Packages </li></Link> */}
                  <Link to='/blog'> <li>   Blog </li></Link>
                  <Link to='/contact'> <li>   Contact Us </li></Link>
                </ul>
                </div>
                {/* </a> */}
              </div>

              <div className="five">
                <div className="flag">
                  <span><b>Services</b></span>
                </div>
                <ul className='footer-links'>
                  <Link to='/graphics'><li>   Graphic Designing </li> </Link>
                  <Link to='/webdesign'> <li>   Web Designing </li> </Link>
                  <Link to='/webapp-development'> <li>    Web Development </li></Link>
                  <Link to='/digitalmarketing'> <li>    Digital Marketing </li></Link>
                  <Link to='/software-solution'> <li>   Software Solutions </li></Link>
                  {/* <Link to='/mobileapp-development'> <li>   App Development </li></Link>
                  <Link to='/seo'> <li>   SEO </li></Link>
                  <Link to='/content-writing'> <li>   Content Writing </li></Link>
                  <Link to='/ecommerce'> <li>   Ecommerce App </li></Link>
                  <Link to='/devops'> <li>   Devops </li></Link> */}
                </ul>
              </div>
              
              <div className="five">
                <div className="flag" style={{marginTop:'10%'}}>
                </div>
                <ul className='footer-links'>
                  {/* <Link to='/graphics'><li>   Graphic Designing </li> </Link>
                  <Link to='/webdesign'> <li>   Web Designing </li> </Link>
                  <Link to='/webapp-development'> <li>    Web Development </li></Link>
                  <Link to='/digitalmarketing'> <li>    Digital Marketing </li></Link>
                  <Link to='/software-solution'> <li>   Software Solutions </li></Link> */}
                  <Link to='/mobileapp-development'> <li>   App Development </li></Link>
                  <Link to='/seo'> <li>   SEO </li></Link>
                  <Link to='/content-writing'> <li>   Content Writing </li></Link>
                  <Link to='/ecommerce'> <li>   E-Commerce App </li></Link>
                  <Link to='/devops'> <li>   DevOps </li></Link>
                </ul>
              </div>

              <div>
                <div className='footerSide'>
                  <img className='footerLogo' src={logo} alt='Logo' />
                  <div className='footerEmail'><SiMinutemailer /><span className='footerSubEmail'>info@dipixels.com</span></div>
                  <div className='footerEmail'><FiPhoneIncoming /><span className='footerSubEmail'>1-562-534-0589</span></div>
                  <div className='footerIcons'>
                    <a href="https://www.facebook.com/dipixelsagency" target="_blank"><FaFacebookF size="lg" style={{width:'35%', color: '#6c757d', margin: '4%' }} /></a>
                    <a href="#" ><AiOutlineInstagram size="lg" style={{width:'60%', color: '#6c757d', margin: '4%' }} /></a>
                    <a href="#" ><GrTwitter size="lg" style={{width:'60%', color: '#6c757d', margin: '4%' }} /></a>
                    <a href="https://dribbble.com/dipixelsagency" target="_blank"><AiOutlineDribbble size="lg" style={{width:'60%', color: '#6c757d', margin: '4%' }} /></a>
                    <a href="https://www.linkedin.com/company/dipixels" target="_blank"><FaLinkedinIn size="lg" style={{ width:'60%', color: '#6c757d', margin: '4%' }} /></a>

                  </div>
                </div>
                <p className='payment-Bar'>
                  <img src={PayPal} className='img-bar' alt='PayPal' /><br />
                  <img src={MasterCard} className='img-bar' alt='PayPal' /><br />
                  <img src={VisaCard} className='img-bar' alt='PayPal' /><br />
                </p>


              </div>
            </div>
          </div>
        </section>

        <section className="copyright">
          <div className="container">
            {/* <div className="half"> */}
            <div className='setfooter'>
              <p >
                © {new Date().getFullYear()} DiPixels All rights reserved
              </p>
              <ul>
                <li>
                  <Link to="/terms">Term of Use</Link>
                </li>
                <li style={{color:'gray'}}>
                  |
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </div>
        </section>
      </footer>
    </>
  );
}
export default Footer;
