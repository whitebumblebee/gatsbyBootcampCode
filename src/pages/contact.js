import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer'
import Header from '../components/header'
const BlogPage = () => {
    return(
        <div>
            <Header/>
            <h1>Contact Page</h1>
            <p>You can contact me at <Link to="https://twitter.com/crook_nosed">@crook_nosed</Link></p>
            <Footer/>
        </div>
    )
};

export default BlogPage;