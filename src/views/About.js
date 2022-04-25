import React from 'react'
import interest_1 from '../assets/images/img-design.png'
import interest_2 from '../assets/images/img-code.png'
import interest_3 from '../assets/images/img-photo.png'

export default function About() {
    return (
        <>
            <div className="divider"></div>
            <div className='about-page-container flex-column-center'>
                <div className='about-page noselect_'>
                    <h2>a little bit about myself</h2>
                    <div className="about-page-txt">
                        <p>
                            I'm a self-motivated, graduate full stack web developer and self-taught web designer.
                        </p>
                        <p>
                            I have learnt a lot of the processes, concepts and theories of UX/UI and web design through attending workshops, reading blogs/books and applying these to projects in my spare time.
                        </p>
                    </div>

                    <h2>my interests</h2>
                    <div className="interests flex-row-center">
                        <div className="interest-container">
                            <h3>design</h3>
                            <img src={interest_1} alt="" width="200" />
                        </div>
                        <div className="interest-container">
                            <h3>code</h3>
                            <img src={interest_2} alt="" width="200" />
                        </div>
                        <div className="interest-container">
                            <h3>photography</h3>
                            <img src={interest_3} alt="art" width="200" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
