import React from 'react'
import About from './About'
import Banner from './Banner'
import Carts from './Carts'
import Footer from './Footer'
import Reviews from './Reviews'
import Skills from './Skills'

function Home() {
    return (
        <div style={{overflowX : "hidden"}}>
            <Banner/>
            <Carts/>
            <About/>
            <Skills/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default Home
