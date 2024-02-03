import React from 'react';
import InnerHeader from "../../components/InnerHeader";
import Image from "../../assets/inner_page_images/about_image.png";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";


export default function Policy() {
    const componentDetails = [
        {
          backgroundGradientColor: {
            deg: "270",
            minColor: "#a920e1",
            maxColor: "#0dcaee",
          },
          gradientContainerImage: Image, 
          headerImage: require('../../assets/inner_page_images/box.svg'),
          gradientContainerSectionName: ["Home", "/ Privacy Policy"],
          gradientContainerSectionNameUnderlineColor: "#FDCD08",
          gradientContainerWhiteHeading: "Privacy Policy",
          gradientContainerRedHeading: "",
          buttonContainerTitle: "",
          buttonContainerDescription:
            "",
          buttonContainerGreenLinesImage: GreenLineImage,
        },
      ];
    return (<>
      <InnerHeader componentDetails={componentDetails} />
      <div className="termsContainer">
          <div className="termsHeader">PERSONAL INFORMATION COLLECTED</div>
          <li className="termsDesc">The refund request will not be entertained if the initial design concepts are approved by the client. • The refund request will not be entertained if the Client has requested for the revision initial concepts. • In case the Client doesn’t like the first draft of the logo, at all, he/she is advised not to ask for revision or more concepts to avail the refund policy. Any request for refund after revision or request for more concepts will not be entertained. • The refund request will not be entertained if the client, due to whatsoever reason, fails to contact Di Pixels within One weeks after order placement. • The refund will be treated with the minimum order processing fee only. </li>
          <div className="termsHeader">ALL APPLICATIONS FOR REFUND WILL BE CONTENTED ACCORDING TO THE GIVEN ARRANGEMENT</div>
          <li className="termsDesc">If you have submitted the refund application before the delivery of the initial design, then your complete amount would be returned (less 10% service & processing fee). </li>
          <li className="termsDesc">If you have submitted the refund request soon after the initial-design delivery i.e. 48 hours, then 33% of the total amount would be detected excluding 10% services & processing fee.</li>
          <li className="termsDesc">If you have submitted the refund application after 48 hours and before 120 hours, then 66% of the total amount would be detected excluding 10% service & processing fee.</li>
          <li className="termsDesc">If you have submitted the refund request after 120 hours, no amount would be returned. Also, no refund would be given to you if you have not taken any action on your design for 60 days from the ordering date. However, you can reactivate your design by paying reasonable charges for the design activation depending upon your project.</li>
          <div className="termsHeader">NOTE</div>
          <div className="termsDesc">It is to notify that You are not allowed to use our initial design concepts or ideas, under any conditions. Copyrights of the designs shared with You belong to Di Pixels only, unless You have paid the full amount of the agreed order amount.</div>
          <div className="termsHeader">ORDER CANCELLATION</div>
          <div className="termsDesc">In the given conditions, the Company will have the rights to cancel the order without notifying Client.</div>
          <div className="termsDesc">a) If the Client breaches any or all of the Terms of Services, willingly or accidentally OR</div>
          <div className="termsDesc">b) If Di Pixels cannot deliver the project on the given deadline due to inevitable circumstances.</div>
          <div className="termsDesc">In case LogoIn24 cancels the order for any reason except the violation of contract from client’s side, the order amount will be refunded to the client.</div>
          <div className="termsDesc">Note: In case of dissatisfaction, Clients are requested to contact Di Pixels for the Refund Request. Contacting any intermediary institution for Refund without contacting Di Pixels will be considered as breach of agreement and the matter will then be dealt accordingly.</div>
          <div className="termsHeader">DISCLAIMER</div>
          <div className="termsDesc">Logo, portfolio, images and content are sole property of Di Pixels. All third party company names, brand names, trademarks displayed on this website are the property of their respective owners. Furthermore, Di Pixels has no influence over the third party material that is being displayed on the website. Therefore, we are also not responsible for any resemblance with any other material on the web. These portfolios and case studies are actual but exemplary (for better understanding); the actual names, designs, functionality, content and stats/facts may differ from the actual projects.</div>
          <div className="termsHeader">AMENDMENT IN POLICY</div>
          <div className="termsDesc">The Company has all the rights to change, add, delete or edit any or all Terms of Services mentioned without sending notification to the Clients. Therefore, it is strongly recommended to go through this page before filing any dispute. Any dispute filed after the modifications made to this page will acknowledge Your acceptance and agreement to the modified refund policy and the Company will not be liable to compensate the Client for the damages caused to him due to the ignorance of this note.</div>
          <div className="termsDesc"></div>
      </div>
    </>)
}