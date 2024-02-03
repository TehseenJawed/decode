import React from 'react';
import '../../styles/home/index.css'
import {Link} from 'react-router-dom'
import X from '../../assets/images/letter-x.svg'
export default function Technology({ClassTech, triggerFunction}){
  
    return(<div>
        <div className={ClassTech} >
        <div className='sub-techs  col-md-2 col-6'>
          
          <div className='sub-techHead'>
            Server Side
          </div>
          <div className='sub-techopt sub-techopt1'>
              <li>  PHP</li>
              <li>   Laravel</li>
              <li>   Python</li>
              <li>   Django</li>
              <li>   Flask</li>
              <li>   NodeJS</li>
              <li>   ExpressJS</li>
              <Link to="/technologies"  onClick={() => triggerFunction(false)}><li className='ViewAll'>   View All Technologies</li></Link>
            </div>
        </div>

        <div className='sub-techs col-md-2 col-6'>
          <div className='sub-techHead'>
            Front-End
          </div>
          <div className='sub-techopt sub-techopt2'>
              <li>   Angular</li>
              <li>   ReactJS</li>
              <li>   VueJS</li>
              <Link to="/technologies"  onClick={() => triggerFunction(false)}><li className='ViewAll'>   View All Technologies</li></Link>
            </div>
        </div>

        <div className='sub-techs col-md-2 col-6'>
          <div className='sub-techHead'>
            E-Commerce
          </div>
          <div className='sub-techopt sub-techopt3'>
              <li>  Magento</li>
              <li>   WooCommerce</li>
              <li>   Shopify</li>
              <Link to="/technologies"  onClick={() => triggerFunction(false)}><li className='ViewAll'>   View All Technologies</li></Link>
            </div>
        </div>

        <div className='sub-techs col-md-2 col-6'>
          <div className='sub-techHead'>
            CMS
          </div>
          <div className='sub-techopt sub-techopt4'>
              <li>  WordPress</li>
              <li>  Drupal</li>
              <li>  Strapi</li>
              <li>  GhostCMS</li>
              <Link to="/technologies"  onClick={() => triggerFunction(false)}><li className='ViewAll'>   View All Technologies</li></Link>
            </div>
        </div>
        <div className='sub-techs col-md-2 col-6'>
          <div className='crossImage'>
        <img src={X} style={{color:'white', width:'100%',}} onClick={() => triggerFunction(false)}  />
        </div>
          <div className='sub-techHead'>
            Mobile
          </div>
          <div className='sub-techopt sub-techopt5'>
              <li>  iOS</li>
              <li>  Android</li>
              <li>  React Native</li>
              <li>  Flutter</li>
              <li>  Swift</li>
              <li>  Kotlin</li>
              <Link to="/technologies"  onClick={() => triggerFunction(false)}><li className='ViewAll'>   View All Technologies</li></Link>
              
            </div>
        </div>
        <div onMouseOver={() => triggerFunction(false)} style={{width:'100%', height:'20px'}}></div>
        </div>
      </div>
    )
}