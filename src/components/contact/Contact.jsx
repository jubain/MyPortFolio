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
                <img style={{ width: '100%', height: '60%', marginTop: '70px' }} alt="" src="https://image.freepik.com/free-vector/abstract-minimal-white-background_23-2148887988.jpg" />
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