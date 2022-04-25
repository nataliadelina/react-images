import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="divider"></div>
            <div className='flex-column container contact'>
                <h2>contact</h2>
                <div className="contact-intro flex-column-center">
                    <h3>let's work together</h3>
                    <p>whether you are looking to work together, or are simply a fan, feel free to reach out.</p>
                    <button className='btn-send'>
                        <a href="mailto:">send me a message</a>
                    </button>
                </div>
            </div>
        </>
    )
}
