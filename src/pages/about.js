import React from 'react';
import {Link} from 'gatsby';
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return(
        <div>
            <Header/>
            <h1>About Page</h1>
            <p>This is the gatsby page built by Shishir Jha, A full stack developer.</p>
             <p>Need a developer? <Link to='/contact'>Contact me</Link> </p>
             <Footer />
        </div>
    )
};

export default AboutPage;