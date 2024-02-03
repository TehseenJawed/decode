// import "../../styles/home/index.css";
import React, { useState } from "react";
import { FaSmileBeam, FaGrinStars } from "react-icons/fa";
import img from "../../assets/images/logo.png";
import phone from "../../assets/icons/phone-contact.svg";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/dipixels.png";
import ContactForm from "../../components/ContactForm/index";
import Technology from "../../screens/technology";
import Services from "../../screens/services/index";

function Header() {
  const history = useHistory();
  const [getInTouchClass, setGetInTouchClass] = useState("get");
  const [openmenu, setOpenmenu] = useState(false);
  const [openform, setOpenform] = useState(false);
  const [tech, triggerTech] = useState(false);
  const [services, triggerServices] = useState(false);
  function formpop() {
    setOpenform(!openform);
  }

  let location = useLocation();

  function TriggerMenu() {
    triggerTech(false);
    triggerServices(false);
  }

  return (
    <>
      <ContactForm stateform={openform} setform={formpop} />
      <header
        style={{
          position: "fixed",
          zIndex: "10000000",
          backgroundColor: "white",
        }}
        className="setHeader"
      >
        <div className="logo">
          <div className="img">
            <a
              href="JavaScript:void(0)"
              onClick={() => {
                history.push("/");
              }}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontFamily: "MyFirstFont",
                fontSize: "30px",
              }}
              onMouseOver={TriggerMenu}
            >
              <img src={logo} />
              {/* DiPixels */}
            </a>
          </div>
        </div>
        <div
          className="menubar"
          onClick={() => {
            setOpenmenu(!openmenu);
          }}
        >
          <img src={require("../../assets/images/mobmenu.png")} />
        </div>
    {/* Menu for Large Screens */}
        <div className={"nav" && openmenu ? "mobilenav nav setOldHideNav" : "nav setOldHideNav"}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname == "/" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname == "/services" ? "active" : ""}
                onMouseOver={() => {
                  triggerServices(true);
                  triggerTech(false);
                  // TriggerMenu();
                }}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className={location.pathname == "/case-studies" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className={location.pathname == "/packages" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname == "/contact" ? "active" : ""}
                to="/technologies"
                onClick={() => setOpenmenu(false)}
                onMouseOver={() => {
                  triggerTech(true);
                  triggerServices(false);
                  // TriggerMenu();
                }}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={location.pathname == "/about-us" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname == "/blog" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Blog
              </Link>
            </li>
            <li id="nav-telephone">
              <div className="number">
                <a href="tel:+15625340589">
                  <img src={phone} className="iconSize" />
                  1-562-534-0589
                </a>
              </div>
            </li>
          </ul>
        </div>
       {/* Menu for Mobile Screens */}
        <div className={"nav" && openmenu ? "mobilenav nav hideNav" : "nav hideNav"}>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname == "/" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={location.pathname == "/services" ? "active" : ""}
                // onMouseOver={() => {
                //   triggerServices(true);
                //   triggerTech(false);
                //   // TriggerMenu();
                // }}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className={location.pathname == "/case-studies" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                className={location.pathname == "/packages" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname == "/contact" ? "active" : ""}
                to="/technologies"
                onClick={() => setOpenmenu(false)}
                // onMouseOver={() => {
                //   triggerTech(true);
                //   triggerServices(false);
                //   // TriggerMenu();
                // }}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={location.pathname == "/about-us" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname == "/blog" ? "active" : ""}
                onMouseOver={TriggerMenu}
                onClick={() => {
                  setOpenmenu(false);
                }}
              >
                Blog
              </Link>
            </li>
            <li id="nav-telephone">
              <div className="number">
                <a href="tel:+15625340589">
                  <img src={phone} className="iconSize" />
                  1-562-534-0589
                </a>
              </div>
            </li>
          </ul>
        </div>


        <div
          className={getInTouchClass}
          onMouseOver={() => {
            setGetInTouchClass("get getsmile");
          }}
          onMouseLeave={() => {
            setGetInTouchClass("get");
          }}
        >
          <Link
            to="/contact"
            onMouseOver={() => {
              triggerTech(false);
            }}
            className="smiley"
          >
            <FaSmileBeam />
            <FaGrinStars />
            <span>Get In Touch</span>
          </Link>
        </div>
        <ul className="dropdown-mnu">
          <li>
            <a href="#">
              {" "}
              <h4>Services</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Services</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Services</h4>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Services</h4>
            </a>
          </li>
        </ul>
      </header>
      <div className="setHeaderPostion"></div>
      {services ? (
        <Services ClassTech="serviceBar" triggerFunction={triggerServices} />
      ) : (
        <Services ClassTech="serviceBarHide" />
      )}
      {tech ? (
        <Technology ClassTech="techBar" triggerFunction={triggerTech} />
      ) : (
        <Technology ClassTech="techBarHide" />
      )}
    </>
  );
}
export default Header;
