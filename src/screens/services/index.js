import React from 'react';
import graphicdesign from "../../assets/icons/best/service/design.svg";
import computer from "../../assets/icons/best/service/computer.svg";
import developing from "../../assets/icons/best/service/developing.svg";
import seo from "../../assets/icons/best/service/seo.svg";
import erp from "../../assets/icons/best/service/erp.svg";
import mobile from "../../assets/icons/best/service/mobile.svg";
import marketing from "../../assets/icons/best/service/marketing.svg";
import writing from "../../assets/icons/best/service/writing.svg";
import devops from '../../assets/icons/best/service/devops.svg'
import ecommerce from '../../assets/icons/best/service/ecommerce.svg'
import { Link } from 'react-router-dom'
import X from '../../assets/images/letter-x.svg'

export default function Technology({ ClassTech, triggerFunction }) {
    return (
        <div className={ClassTech}>
            <Link to='/graphics' onClick={() => triggerFunction(false)} className=' sub-serviceHead graphics col-sm-2'>
                <img className='imageService' style={{color:'blue'}} src={graphicdesign} />
                Graphic Designing
            </Link>

            <Link to='/webdesign' onClick={() => triggerFunction(false)} className=' sub-serviceHead webDesign col-sm-2'>
                <img className='imageService' src={computer} />
                Web Designing
            </Link>

            <Link to='/webapp-development' onClick={() => triggerFunction(false)} className=' sub-serviceHead webDevelopment col-sm-2'>
                <img className='imageService' src={developing} />
                Web Development
            </Link>

            <Link to='/digitalmarketing' onClick={() => triggerFunction(false)} className=' sub-serviceHead digitalMarketing col-sm-2'>
                <img className='imageService' src={seo} />
                Digital Marketing
            </Link>

            <Link to='/software-solution' onClick={() => triggerFunction(false)} className=' sub-serviceHead softwareSolution col-sm-2'>
                <img className='imageService' src={erp} />
                Software Solutions
            </Link>
            <img src={X} className='serviceCross' onClick={() => triggerFunction(false)}  />

            <Link to='/mobileapp-development' onClick={() => triggerFunction(false)} className=' sub-serviceHead appDevelopment col-sm-2'>
                <img className='imageService' src={mobile} />
                App Development
            </Link>

            <Link to='/seo' onClick={() => triggerFunction(false)} className=' sub-serviceHead seo col-sm-2'>
                <img className='imageService' src={marketing} />
                <p>SEO</p>
            </Link>

            <Link to='/content-writing' onClick={() => triggerFunction(false)} className=' sub-serviceHead contentWriting col-sm-2'>
                <img className='imageService' src={writing} />
                Content Writing
            </Link>

            <Link to='/ecommerce' onClick={() => triggerFunction(false)} className=' sub-serviceHead ecommerceApp col-sm-2'>
                <img className='imageService' src={ecommerce} />
                Ecommerce App

            </Link>

            <Link to='/devops'  className=' sub-serviceHead devOps col-sm-2 col-4'>
                <img style={{color:'red'}} className='imageService' src={devops} />
                <p>DevOps</p>
            </Link>
        <div onMouseOver={() => triggerFunction(false)} style={{width:'100%', height:'20px'}}></div>
        </div>


    )
}