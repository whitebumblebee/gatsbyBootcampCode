import { Link } from 'gatsby'
import React from 'react'
import './header.css'

export default function header() {
    return (
        <div>
            <h1>Great Gatsby Bootcamp</h1>
            <div className="header-component">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
