import React from 'react'
import { useLocation } from 'react-router-dom'
import InnerHeader from "../../components/InnerHeader";
import Image from "../../assets/inner_page_images/about_image.png";
import ClientsLogosImage from "../../assets/inner_page_images/clients_image.png";
import GreenLineImage from "../../assets/inner_page_images/green_lines_image.png";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai'
import { GrTwitter } from 'react-icons/gr'

export default function Blogs() {
  let location = useLocation();
  const { mainHeading, headerImage, bodydesc, heading2, serve, heading2desc1, heading3, heading3desc, blogHref } = location.state
  const componentDetails = [
    {
      backgroundGradientColor: {
        deg: "270",
        minColor: "#a920e1",
        maxColor: "#0dcaee",
      },
      gradientContainerImage: Image,
      gradientContainerSectionName: [],
      gradientContainerSectionNameUnderlineColor: "#FDCD08",
      gradientContainerWhiteHeading: "Featured Blogs",
      gradientContainerRedHeading: "",
      buttonContainerTitle:
        "",
      buttonContainerDescription:
        "",
      buttonContainerGreenLinesImage: GreenLineImage,
      buttonContainerButtonTitle: "Schedule Time To Talk",
      clientsContainerTitle:
        "Our Clients Include 150 Global Brands, Silicon Valley Founders",
      clientsContainerlogos: ClientsLogosImage,
    },
  ];
  return (
    <div>

      <InnerHeader componentDetails={componentDetails} />
        <div className='footerIcons sideIcons'>
          <a href="https://www.facebook.com/dipixelsagency" target="_blank"><FaFacebookF size="lg" style={{ width: '25%', color: '#6c757d', margin: '4%' }} /></a>
          <a href="#" ><AiOutlineInstagram size="lg" style={{ width: '40%', color: '#6c757d', margin: '4%' }} /></a>
          <a href="#" ><GrTwitter size="lg" style={{ width: '40%', color: '#6c757d', margin: '4%' }} /></a>
          <a href="https://dribbble.com/dipixelsagency" target="_blank"><AiOutlineDribbble size="lg" style={{ width: '40%', color: '#6c757d', margin: '4%' }} /></a>
          <a href="https://www.linkedin.com/company/dipixels" target="_blank"><FaLinkedinIn size="lg" style={{ width: '40%', color: '#6c757d', margin: '4%' }} /></a>

        </div>
      <div>

      </div>
      <div className='mainBlog'>
        <h1>{mainHeading}</h1>
        <img className='blogImages' src={headerImage} />
        <p>
          {bodydesc}
          <br />
          <br />
          <h2>{heading2}</h2>
          {heading2desc1}<br />
          <ul>
            {serve.map((v, i) => <li>{v}</li>)}

          </ul>

          <h2>{heading3}</h2><br />

          {heading3desc[0]}<br /><br />
          {heading3desc[1]} <br /><br />
          {heading3desc[2]} <br /><br />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <a href={blogHref} className="view" target='__blank'>
              <span>Read More Details</span>
            </a>
          </div>
        </p>
      </div>


    </div>
  )
}