import React from 'react'
import heroImg from '../assets/images/work-3d_butterfly.png'

export default function HeroImg() {
    return (
        <div>
            <h2>HeroImg</h2>
            <div className="hero-img">
                <img src={heroImg} alt="hero img" />
            </div>
        </div>
    )
}
