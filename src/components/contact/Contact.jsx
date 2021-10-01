import React, { useState } from 'react';
import './contact.css'

function Contact(props) {
    const [message, setmessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setmessage(true)
    }

    return (
        <div id='contact' className='contact'>
            <div className='left'>
                <img alt="" src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762__340.png" />
                <div className="contacts">
                    <ul>
                        <li>https://github.com/jubain</li>
                        <li>+44 07842583541</li>
                        <li>jubeennp@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='right'>
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks, I'll reply</span>}
                </form>
            </div>
        </div>
    );
}

export default Contact;