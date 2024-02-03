import React, { useState } from 'react';
import SideImage1 from '../../assets/images/blog-header-1.jpg'
import reacticon from "../../assets/icons/framework/React.svg";
import { RiVuejsFill } from 'react-icons/ri'
import { FaAngular } from 'react-icons/fa'
import { BiRightArrow } from 'react-icons/bi'
import mobiletest from "../../assets/images/mobileimage.png";
import { useLocation } from 'react-router-dom'
import Technology from '../technology';
import nodejs from "../../assets/icons/framework/nodejs.svg";
import { DiMongodb, DiDjango } from 'react-icons/di'
import { AiFillApple } from 'react-icons/ai'
import webmobile from "../../assets/images/webmobile2.png";
import regeneration from "../../assets/images/regeneration.png";
import ufcmobile from "../../assets/images/ufcmobile.png";
import AlphaMoon from "../../assets/images/website-01.png";
import CircusKaput from "../../assets/images/website-05.png";

function Technologies() {

    let location = useLocation();
    const { technology } = location.state
    console.log(technology)
    return (<>{
        technology.map((v, i) => {
            if (v == 'react') {
                return (
                    <div className="box reactic">
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
                    <div className="box nodejs">
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
                    <div className="box python">
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
                    <div className="box nodejs">
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
                    <div className="box mongo">
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
                    <div className="box django">
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
                    <div className="box next">
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
    
    let location = useLocation();
    const { id } = location.state
    switch(id){
        case 1:
            return <img src={ufcmobile} style={{width:'1200px', height:'auto'}}/>
        case 2:
            return <img src={regeneration} style={{width:'1200px', height:'auto'}}/>
        case 3:
            return <img src={webmobile} style={{width:'1200px', height:'auto'}}/>
        case 4:
            return <img src={AlphaMoon} style={{width:'1200px', height:'auto'}}/>
        case 5:
            return <img src={CircusKaput} style={{width:'1200px', height:'auto'}}/>
    }
}

export default function CaseStudy() {
    let location = useLocation();
    const { page1, page2, page2li, result } = location.state
    if (page2li !== null) {
        return (
            <div>

                <section className="homeslider secondHome">
                    <div className="scon">
                        {/* <h5>Welcome to</h5> */}
                        <h1>CASE STUDY</h1>
                        <p className='caseStudyDesc'>
                            Online Collaboration Platform Development for Remote Teams
                </p>
                        {/* <a href="javascript:void(0)" onClick={() => { formpop() }} className="talk">
                  <span>Let's talk!</span>
                  <div className="btn">
                    <img src={headset} />
                  </div>
                </a> */}
                    </div>
                    {/* <div className="simg">
              <img src={jeffmobile} />
              <img src={matchmobile} />
            </div> */}
                    <div class="simg">
                        <HeaderImage />
                    </div>
                </section>

                {/* <div className='caseStudyBackImage'>
                    <div className='col-6 caseStudyHeader'></div>
                    <div className='col-6 caseStudyHeader'>
                        <div className='caseStudyHeading'>CASE STUDY</div>
                        <div className='caseStudyDesc'>Online Collaboration Platform Case Study</div>
                    </div>
                </div> */}
                <section className="">
                    <div className="container" style={{ padding: '2%' }}>
                        <div className="tech setTechnologies">

                            <h3 className="tech-head tech-head-bottom" style={{ textAlign: 'center' }}>Technology Stack</h3>
                            <div className="tbox tech-center">

                                <Technologies />
                            </div>


                        </div>
                    </div>
                </section>
                <div className='caseStudyPage2'>
                    <div className='caseStudysubPage2 col-sm-6 col-12'>
                        <img className='caseImage1' src={SideImage1} />
                    </div>
                    <div className='caseStudysubPage2 col-sm-6 col-12'>
                        <div className='caseStudyHeading'>The Client</div>
                        <div className='caseStudysubDesc'>
                            {page1}
                        </div>
                    </div>
                </div>
                <div className='caseStudyPage3'>
                    <div className='caseStudysubPage2 col-sm-8 col-12'>
                        <div className='caseStudysubDesc'>
                            {page2[0]} <br />
                            {page2[1]} <br />
                            {page2[2]} <br />
                            {page2[3]} <br />

                            <BiRightArrow className='arrowIconcaseStudy' /> {page2li[0]} <br />
                            <BiRightArrow className='arrowIconcaseStudy' /> {page2li[1]} <br />
                            <BiRightArrow className='arrowIconcaseStudy' /> {page2li[2]} <br />
                            {/* <BiRightArrow className='arrowIconcaseStudy' /> {page2li[3]} <br /> */}
                            {page2[4]} <br /><br />
                            <h4>Result</h4>
                            {result}
                        </div>
                    </div>
                    <div className='caseStudysubPage2 col-sm-4 col-12'>
                        <img className='caseImage1' src={SideImage1} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>

                <section className="homeslider secondHome">
                    <div className="scon">
                        {/* <h5>Welcome to</h5> */}
                        <h1>CASE STUDY</h1>
                        <p className='caseStudyDesc'>
                            Online Collaboration Platform Development for Remote Teams
                </p>
                        {/* <a href="javascript:void(0)" onClick={() => { formpop() }} className="talk">
                  <span>Let's talk!</span>
                  <div className="btn">
                    <img src={headset} />
                  </div>
                </a> */}
                    </div>
                    {/* <div className="simg">
              <img src={jeffmobile} />
              <img src={matchmobile} />
            </div> */}
                    <div class="simg">
                        <HeaderImage />
                    </div>
                </section>

                {/* <div className='caseStudyBackImage'>
                    <div className='col-6 caseStudyHeader'></div>
                    <div className='col-6 caseStudyHeader'>
                        <div className='caseStudyHeading'>CASE STUDY</div>
                        <div className='caseStudyDesc'>Online Collaboration Platform Case Study</div>
                    </div>
                </div> */}
                <section className="">
                    <div className="container" style={{ padding: '2%' }}>
                        <div className="tech setTechnologies">

                        <h3 className="tech-head tech-head-bottom" style={{ textAlign: 'center' }}>Technology Stack</h3>
                            <div className="tbox tech-center">

                                <Technologies />
                            </div>


                        </div>
                    </div>
                </section>
                <div className='caseStudyPage2'>
                    <div className='caseStudysubPage2 col-sm-6 col-12'>
                        <img className='caseImage1' src={SideImage1} />
                    </div>
                    <div className='caseStudysubPage2 col-sm-6 col-12'>
                        <div className='caseStudyHeading'>The Client</div>
                        <div className='caseStudysubDesc'>
                            {page1}
                        </div>
                    </div>
                </div>
                <div className='caseStudyPage3'>
                    <div className='caseStudysubPage2 col-sm-8 col-12'>
                        <div className='caseStudysubDesc'>
                            {page2[0]} <br />
                            {page2[1]} <br />
                            {page2[2]} <br />
                            {page2[3]} <br />

                            {/* <BiRightArrow className='arrowIconcaseStudy' /> {page2li[0]} <br />
                        <BiRightArrow className='arrowIconcaseStudy' /> {page2li[1]} <br />
                        <BiRightArrow className='arrowIconcaseStudy' /> {page2li[2]} <br /> */}
                            {/* <BiRightArrow className='arrowIconcaseStudy' /> {page2li[3]} <br /> */}
                            {page2[4]}

                        </div>
                    </div>
                    <div className='caseStudysubPage2 col-sm-4 col-12'>
                        <img className='caseImage1' src={SideImage1} />
                    </div>
                </div>
            </div>
        )
    }
}