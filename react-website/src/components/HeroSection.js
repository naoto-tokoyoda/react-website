import React from 'react'
// to use button component
import { Button } from './Button';
// to use herosection.css
import './HeroSection.css';
// to use app.css
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVANTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline" 
                    ButtonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary" 
                    ButtonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle" ></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
