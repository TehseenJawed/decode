import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Importing Screens
import Home from "../../../screens/home/index";

// Inner Pages
import AboutUs from "../../../screens/innerpages/aboutus/index";
import Services from "../../../screens/innerpages/services/index";

// Importing 404 Not Found Screen
import Error404 from "../../../screens/errors/404";
import WebApp from "../../../screens/innerpages/webapp";
import MobileApp from "../../../screens/innerpages/mobileapp";
import Ecommerce from "../../../screens/innerpages/ecommerce";
import Devops from "../../../screens/innerpages/devops";
import { useLocation } from "react-router-dom";
import Casestudies from "../../../screens/caseStudy";
import Graphics from "../../../screens/innerpages/graphicdesign";
import TermsOfUse from "../../../screens/term_of_use";
import PrivacyPolicy from "../../../screens/privacy_policy";
import Blog from "../../../screens/blog";
import BlogReadMe from "../../../screens/blog/readmore";
import WebDesign from "../../../screens/innerpages/WebDesign";
import SoftwareSolution from "../../../screens/innerpages/software_solution";
import DigitalMarketing from "../../../screens/innerpages/DigitalMarketing";
import SEO from "../../../screens/innerpages/seo";
import ContentWriting from "../../../screens/innerpages/contentWriting";
import ContentReadMore from "../../../screens/caseStudy/readmore";
import "../../../App.css";
import Packages from "../../../screens/Skills/index";
import Contact from "../../../screens/contact";
import Technologies from "../../../screens/innerpages/technologies";
import PayPal from "../../../screens/innerpages/paypal";
//Animation
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactForm from "../../../components/ContactForm/index";
import CustomPayment from "../../../screens/CustomPayment";
import PayNow from "../../../screens/CustomPayment/paynow";
import Success from "../../../components/success";
import CustomPackage from "../../../screens/CustomPackage";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
          <Switch>
            {/* Import you screens here and keep accordingly */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/webapp-development" component={WebApp} />
            <Route exact path="/mobileapp-development" component={MobileApp} />
            <Route
              exact
              path="/digitalmarketing"
              component={DigitalMarketing}
            />
            <Route exact path="/ecommerce" component={Ecommerce} />
            <Route exact path="/devops" component={Devops} />
            <Route exact path="/graphics" component={Graphics} />
            <Route exact path="/webdesign" component={WebDesign} />
            <Route
              exact
              path="/software-solution"
              component={SoftwareSolution}
            />
            <Route exact path="/seo" component={SEO} />
            <Route exact path="/content-writing" component={ContentWriting} />
            <Route
              exact
              path="/case-studies/readmore"
              component={ContentReadMore}
            />
            <Route exact path="/paypal" component={PayPal} />
            <Route exact path="/case-studies" component={Casestudies} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/readmore" component={BlogReadMe} />
            <Route exact path="/packages" component={Packages} />
            <Route exact path="/technologies" component={Technologies} />
            <Route exact path="/terms" component={TermsOfUse} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/build-package" component={CustomPayment} />
            <Route exact path="/paywith_paypal/:id" component={PayNow} />
            <Route exact path="/paywith_stripe/:id" component={PayNow} />
            <Route exact path="/checkout" component={Success} />
            <Route exact path="/custom-package" component={CustomPackage} />

            {/* If active route does'nt exist then 404 error will be shown */}
            <Route exact path="*" component={Error404} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default AppRoutes;
