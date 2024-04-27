import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/propertyList'
import FeaturedHotels from '../../components/featuredHotels/featuredHotels'
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturedHotels />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home
