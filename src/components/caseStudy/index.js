import React, { useState } from 'react';
import SideImage1 from '../../assets/images/blog-header-1.jpg'
import reacticon from "../../assets/icons/framework/React.svg";
import { RiVuejsFill } from 'react-icons/ri'
import { FaAngular } from 'react-icons/fa'
import { BiRightArrow } from 'react-icons/bi'
// import mobiletest from "../../assets/images/mobileimage.png";
import { useLocation } from 'react-router-dom'
// import Technology from '../technology';
import nodejs from "../../assets/icons/framework/nodejs.svg";
import { DiMongodb, DiDjango } from 'react-icons/di'
import { AiFillApple } from 'react-icons/ai'
import webmobile from "../../assets/images/webmobile2.png";
import regeneration from "../../assets/images/regeneration.png";
import ufcmobile from "../../assets/images/ufcmobile.png";
import AlphaMoon from "../../assets/images/website-01.png";
import CircusKaput from "../../assets/images/website-05.png";
import {ImCross} from 'react-icons/im'
import {Link} from 'react-router-dom'



export default function CaseStudy(props) {
    const { id, page1, page2, page2li, result,technology } = props.obj.subPage
    
    function Technologies() {

        return (<>{
            technology.map((v, i) => {
                if (v == 'react') {
                    return (
                        <div className="box reactic setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <img src={reacticon} />
                                </div>
                                <div className="back">
                                    <img src={reacticon} />
                                </div>
                            </div>
                            <p>React</p>
                        </div>
                    )
                }
                else if (v == 'angular') {
                    return (
                        <div className="box nodejs setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <FaAngular style={{ color: 'white' }} size='25' />
                                </div>
                                <div className="back">
                                    <FaAngular style={{ color: '#4bae50' }} size='35' />
                                </div>
                            </div>
                            <p>Angular</p>
                        </div>
                    )
                }
                else if (v == 'vue') {
                    return (
                        <div className="box python setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <RiVuejsFill size='25' style={{ color: 'white' }} />
                                </div>
                                <div className="back">
                                    <RiVuejsFill size='35' />
                                </div>
                            </div>
                            <p>VueJS</p>
                        </div>
                    )
                }
                else if (v == 'node') {
                    return (
                        <div className="box nodejs setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <img src={nodejs} />
                                </div>
                                <div className="back">
                                    <img src={nodejs} />
                                </div>
                            </div>
                            <p>NodeJS</p>
                        </div>
                    )
                }
                else if (v == 'mongo') {
                    return (
                        <div className="box mongo setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <DiMongodb size='25' style={{ color: 'white' }} />
                                </div>
                                <div className="back">
                                    <DiMongodb size='35' />
                                </div>
                            </div>
                            <p>MongoDB</p>
                        </div>
                    )
                }
                else if (v == 'django') {
                    return (
                        <div className="box django setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <DiDjango size='25' style={{ color: 'white' }} />
                                </div>
                                <div className="back">
                                    <DiDjango size='35' />
                                </div>
                            </div>
                            <p>Django</p>
                        </div>
                    )
                }
                else if (v == 'ios') {
                    return (
                        <div className="box next setTechIcons">
                            <div className="full">
                                <div className="front">
                                    <AiFillApple size='25' style={{ color: 'white' }} />
                                </div>
                                <div className="back">
                                    <AiFillApple size='35' />
                                </div>
                            </div>
                            <p>iOS</p>
                        </div>
                    )
                }
            })
        }</>)
    }
    function HeaderImage(){
        
        switch(id){
            case 1:
                return <img src={ufcmobile} style={{width:'500px', height:'auto'}}/>
            case 2:
                return <img src={regeneration} style={{width:'500px', height:'auto'}}/>
            case 3:
                return <img src={webmobile} style={{width:'500px', height:'auto'}}/>
            case 4:
                return <img src={AlphaMoon} style={{width:'500px', height:'auto'}}/>
            case 5:
                return <img src={CircusKaput} style={{width:'500px', height:'auto'}}/>
        }
    }

    
    return (
        <div>
            {props.obj !== null ? (
                <div className="gform-pop " style={{ opacity: props.stateform ? 1 : 0, zIndex: props.stateform ? 99999 : -99 }}>
                <section className="fget setCaseStudy" style={{padding:'15%', textAlign:'center'}}>
      <div style={{display:'flex', flexDirection:'row' , width:'100%',justifyContent:'flex-end', color:'white', margin:'5%'}}>
          <ImCross onClick={()=>{props.setform()}} />
      </div>
      
    
      {/* <div className='caseStudyBackImage'>
          <div className='col-6 caseStudyHeader'></div>
          <div className='col-6 caseStudyHeader'>
              <div className='caseStudyHeading'>CASE STUDY</div>
              <div className='caseStudyDesc'>Online Collaboration Platform Case Study</div>
          </div>
      </div> */}
      
      <div className='caseStudyPage2'>
          {/* <div className='caseStudysubPage2 col-sm-6 col-12'>
              <img className='caseImage1' src={SideImage1} />
          </div> */}
          <div className='caseStudysubPage2 col-sm-12 col-12'>
          <section className="homeslider secondHome">
                    <div className="scon">
                        
                        <h1 style={{color:'black'}}>{props.obj.ufcImage}</h1>
                        
                    </div>
                    <div class="simg">
                        <HeaderImage />
                    </div>
                </section>
                
              <div className='caseStudyHeading'>
                  The Client
                  </div>
              <div className='caseStudysubDesc'>
                  {page1}
              </div>
          </div>
      </div>
      <div className='caseStudyPage3'>
          <div className='caseStudysubPage2 col-sm-12 col-12'>
              <div className='caseStudysubDesc'>
                  {page2[0]} <br />
                  {page2[1]} <br />
                  {page2[2]} <br />
                  {page2[3]} <br />
    
                  {/* <BiRightArrow className='arrowIconcaseStudy' /> {page2li[0]} <br />
                  <BiRightArrow className='arrowIconcaseStudy' /> {page2li[1]} <br />
                  <BiRightArrow className='arrowIconcaseStudy' /> {page2li[2]} <br /> */}
                  {/* <BiRightArrow className='arrowIconcaseStudy' /> {page2li[3]} <br /> */}
                  {page2[4]} <br /><br />
                  <h4>Result</h4>
                  {result}
              </div>
              <section className="">
          <div className="container" style={{ padding: '2%' }}>
              <div className="tech setTechnologies">
    
                  <h3 className="tech-head tech-head-bottom" style={{ textAlign: 'center' }}>Technology Stack</h3>
                  <div className="tbox tech-center">
    
                      <Technologies />
                  </div>
                  <div style={{marginTop:'5%'}} className="tbox tech-center">
                
                <Link to="/packages" style={{margin:'1%'}} className="view">
                  <span>Our Packages</span>
                </Link>

                <Link to="/contact" style={{margin:'1%'}} className="view">
                  <span>SCHEDULE TIME TO TALK</span>
                </Link>

                
                  </div>
    
    
              </div>
          </div>
      </section>
          </div>
          
      </div>
      
      </section>
      
    </div>
            ) : null}
        </div>
    )
}