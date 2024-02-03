import React, { useState } from "react";
import InnerHeader from "../../../components/InnerHeader/index.js";
import ClientsLogosImage from "../../../assets/inner_page_images/clients_image.png";
import GreenLineImage from "../../../assets/inner_page_images/green_lines_image.png";

const Notfound = () => {
    const componentDetails = [
        {
          backgroundColor: "#ED1F26",
          gradientContainerImage: Image,
          gradientContainerSectionName: "Requested url could not be found",
          gradientContainerSectionNameUnderlineColor: "#000000",
          gradientContainerWhiteHeading: "404",
          gradientContainerRedHeading: "Not Found!",
          buttonContainerTitle:
            "Get A High-Profit Ecommerce Website To Bring In Revenue Like Clockwork",
          buttonContainerGreenLinesImage: GreenLineImage,
          buttonContainerButtonTitle: "Schedule Time To Talk",
          clientsContainerTitle:
            "Our Clients Include 150 Global Brands, Silicon Valley Founders",
          clientsContainerlogos: ClientsLogosImage,
        },
      ];
    return(
        <>
            <InnerHeader componentDetails={componentDetails} />
        </>
    )


}

export default Notfound;