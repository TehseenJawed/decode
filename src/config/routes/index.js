import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppRoutes from './AppRoutes/index.js'
import Header from '../../components/header/index'
import Footer from '../../components/footer/footer'

const Navigations = React.memo((props) => {
    
    return (
        <Router>
            <Header />
            {/* App Routes */}
            <AppRoutes />
            <Footer />
        </Router>
    );
    
})

export default Navigations