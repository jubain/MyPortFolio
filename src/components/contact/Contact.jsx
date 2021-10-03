import React, { useState } from 'react';
import './contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact(props) {
    const [message, setmessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setmessage(true)
    }

    return (
        <div className="main">
            <div id='contact' className='contact'>
                <div className='left'>
                    <div className="imageContainer">
                        <img src='https://cdn.hipwallpaper.com/i/0/86/DVL6mK.jpg' alt="" />
                    </div>

                </div>
                <div className='right'>
                    <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type='submit'>Send</button>
                        {message && <span>Thanks, I'll reply</span>}
                    </form>
                </div>
            </div>
            <h2 style={{ alignSelf: 'center' }}>Stay Connected</h2>
            <div className="contacts">
                <div className='contactBox' onClick={() => { window.open("https://github.com/jubain", "_blank") }}>
                    <GitHubIcon className="icon" />
                    <h4>https://github.com/jubain</h4>
                </div>
                <div className='contactBox'>
                    <PhoneIcon className="icon" />
                    <h4>+44 07842583541</h4>
                </div>
                <div className='contactBox'>
                    <EmailIcon className="icon" />
                    <h4>jubeennp@gmail.com</h4>
                </div>
                <div className='contactBox'>
                    <InstagramIcon className="icon" />
                    <h4>jubeen_amatya</h4>
                </div>
            </div>
        </div>
    );
}

export default Contact;