import React, { useState } from 'react'
import "../../../App.css"
import TopFooter from '../../../components/footer/topfooter'
const Blog = (props) => {
    return (<>
        <div className="uc-container">
            <img src={require('../../../assets/images/uc-bg.jpg')}/>
        </div>
        <TopFooter />
    </>)
}

export default Blog;