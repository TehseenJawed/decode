import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


import android from "../../assets/icons/framework/android.svg";
import nodejs from "../../assets/icons/framework/nodejs.svg";
import php from "../../assets/icons/framework/php.svg";
import apple from "../../assets/icons/framework/apple.svg";
import flutter from "../../assets/icons/framework/flutter.svg";
import ionic from "../../assets/icons/framework/ionic.svg";
import swift from "../../assets/icons/framework/swift.svg";
import reacticon from "../../assets/icons/framework/React.svg";
import "../../styles/home/index.css";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import { RiVuejsFill } from 'react-icons/ri'
import { FaAngular, FaJava } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiNextDotJs, SiFlask, SiPerl, SiFirebase } from 'react-icons/si'
import { DiDjango } from 'react-icons/di'


function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
        .post("http://192.168.8.109:8080/api/email", {
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then((res) => {
          // console.log(res);
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
    <div className="gform-pop" style={{ opacity: props.stateform ? 1 : 0, zIndex: props.stateform ? 99999 : -99 }}>
      <section className="fget" style={{padding:'15%', textAlign:'center'}}>
      <section className="">
          <div className="container">
            <div className="tech">

              <h3 className="tech-head tech-head-bottom" style={{color:'white'}}>Front-End Technologies</h3>
              <div className="tbox tech-center">

              <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img width='500px' height='500px' src={reacticon} />
                    </div>
                  </div>
                  <p className="setTextColor">React</p>
                </div>


                <div className="box angular">
                  <div className="full">
                    <div className="front">
                      <FaAngular style={{ color: 'white' }} size='35' />
                    </div>
                    <div className="back">
                      <FaAngular size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">Angular</p>
                </div>

                <div className="box vuejs">
                  <div className="full">
                    <div className="front">
                      <RiVuejsFill size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <RiVuejsFill size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">VueJS</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiNextDotJs style={{ color: 'white' }} size='35' />
                    </div>
                    <div className="back">
                      <SiNextDotJs size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">NextJS</p>
                </div>


                <div className="box gatsby">
                  <div className="full">
                    <div className="front">
                      <GrGatsbyjs size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <GrGatsbyjs size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">Gatsby</p>
                </div>

                <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p className="setTextColor">Flutter</p>
                </div>
              </div>

              <h3 className="tech-head" style={{color:'white'}}>Mobile Technologies</h3>
              <div className="tbox">
                <div className="box apple">
                  <div className="full">
                    <div className="front">
                      <img src={apple} />
                    </div>
                    <div className="back">
                      <img src={apple} />
                    </div>
                  </div>
                  <p className="setTextColor">Ios</p>
                </div>

                <div className="box android">
                  <div className="full">
                    <div className="front">
                      <img src={android} />
                    </div>
                    <div className="back">
                      <img src={android} />
                    </div>
                  </div>
                  <p className="setTextColor">Android</p>
                </div>

                <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img src={reacticon} />
                    </div>
                  </div>
                  <p className="setTextColor">React Native</p>
                </div>
                <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p className="setTextColor">Flutter</p>
                </div>

                <div className="box swift">
                  <div className="full">
                    <div className="front">
                      <img src={swift} />
                    </div>
                    <div className="back">
                      <img src={swift} />
                    </div>
                  </div>
                  <p className="setTextColor">Swift</p>
                </div>
                <div className="box ionic">
                  <div className="full">
                    <div className="front">
                      <img src={ionic} />
                    </div>
                    <div className="back">
                      <img src={ionic} />
                    </div>
                  </div>
                  <p className="setTextColor">Ionic</p>
                </div>
              </div>
              {/* <h3 className="tech-head">Mobile Technologies</h3>
              <div className="tbox">
                <div className="box apple">
                  <div className="full">
                    <div className="front">
                      <img src={apple} />
                    </div>
                    <div className="back">
                      <img src={apple} />
                    </div>
                  </div>
                  <p>Ios</p>
                </div>

                <div className="box android">
                  <div className="full">
                    <div className="front">
                      <img src={android} />
                    </div>
                    <div className="back">
                      <img src={android} />
                    </div>
                  </div>
                  <p>Android</p>
                </div>

                <div className="box reactic">
                  <div className="full">
                    <div className="front">
                      <img src={reacticon} />
                    </div>
                    <div className="back">
                      <img src={reacticon} />
                    </div>
                  </div>
                  <p>React Native</p>
                </div>

                <div className="box swift">
                  <div className="full">
                    <div className="front">
                      <img src={swift} />
                    </div>
                    <div className="back">
                      <img src={swift} />
                    </div>
                  </div>
                  <p>Swift</p>
                </div>
                <div className="box ionic">
                  <div className="full">
                    <div className="front">
                      <img src={ionic} />
                    </div>
                    <div className="back">
                      <img src={ionic} />
                    </div>
                  </div>
                  <p>Ionic</p>
                </div>
                <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p>Flutter</p>
                </div>
              </div> */}
              <h3 className="tech-head tech-head-bottom" style={{color:'white'}}>Back-End Technologies</h3>
              <div className="tbox tech-center">
                <div className="box php">
                  <div className="full">
                    <div className="front">
                      <img src={php} />
                    </div>
                    <div className="back">
                      <img src={php} />
                    </div>
                  </div>
                  <p className="setTextColor">PHP</p>
                </div>
                <div className="box php">
                  <div className="full">
                    <div className="front">
                      <SiPerl size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiPerl size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">Perl</p>
                </div>

                <div className="box nodejs">
                  <div className="full">
                    <div className="front">
                      <img src={nodejs} />
                    </div>
                    <div className="back">
                      <img src={nodejs} />
                    </div>
                  </div>
                  <p className="setTextColor">Node JS</p>
                </div>

                <div className="box django">
                  <div className="full">
                    <div className="front">
                      <DiDjango size='45' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <DiDjango size='55' />
                    </div>
                  </div>
                  <p className="setTextColor">Django</p>
                </div>

                <div className="box next">
                  <div className="full">
                    <div className="front">
                      <SiFlask size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiFlask size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">Flask</p>
                </div>

                <div className="box kotlin">
                  <div className="full">
                    <div className="front">
                      <SiFirebase size='35' style={{ color: 'white' }} />
                    </div>
                    <div className="back">
                      <SiFirebase size='45' />
                    </div>
                  </div>
                  <p className="setTextColor">Firebase</p>
                </div>
                {/* <div className="box flutter">
                  <div className="full">
                    <div className="front">
                      <img src={flutter} />
                    </div>
                    <div className="back">
                      <img src={flutter} />
                    </div>
                  </div>
                  <p>Flutter</p>
                </div> */}
              </div>
              {/* <a href="#" className="viewlink">
                View All Technologies
              </a> */}
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div onClick={() => { props.setform() }} style={{cursor:'pointer'}} className="view">
                <span>Back To Home </span>
              </div>
            </div>
            </div>
          </div>
        </section>
      </section>

    </div>
  );
}
export default ContactForm;
