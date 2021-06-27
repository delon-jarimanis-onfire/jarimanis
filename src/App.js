import React from 'react'
import Footer from './components/footer'
import Headers from './components/header'
import Hero from './components/hero'
import Special from './components/special'
import landingPageJson from './json/landingpage.json'
import './assets/scss/_bootstrap.scss'

export default function landingpage() {
    return (
        <>
            <Headers />
            <Hero />
            <Special data={landingPageJson.special} />
            <Footer />
        </>
    )
}
