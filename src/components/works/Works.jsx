import React, { useState } from 'react';
import './works.css'

const data = [
    {
        id: "1",
        icon: '',
        title: "Web Development",
        desc:
            "I developed a website for a construction company",
        img:
            "./assets/houseBuilds.png",
        link: 'www.housebuildsolutions.net'
    },
    {
        id: "2",
        icon: "./assets/globe.png",
        title: "Weather App",
        desc:
            "This app lets user see the weather of their location.",
        img:
            "./assets/weatherApp.png",
        link: 'https://jubeen-weather-application.herokuapp.com/'
    },
    {
        id: "3",
        icon: "./assets/writing.png",
        title: "Chat App",
        desc:
            "Chat room",
        img:
            "./assets/chatApp.png",
        link: 'https://jubeen-chat-app.herokuapp.com/'
    },
]

function Works(props) {

    const [currentSlider, setcurrentSlider] = useState(0)

    const handleClick = (way) => {
        way === 'left' ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2) :
            setcurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0)
    }

    return (
        <div id='works' className='works'>
            <h1>Works</h1>

            <div className='slider' style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                {data.map(item => {
                    return (
                        <div className='container'>
                            <div className='item'>
                                <div className='left'>
                                    <div className='leftContainer'>
                                        <div className='imgContainer'>
                                            {/* <img src={item.icon} alt="" /> */}
                                            {item.icon}
                                            {/* <PhoneAndroidIcon className='img' /> */}
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc} </p>
                                        <span><a href="">Link</a></span>
                                    </div>
                                </div>
                                <div className='right'>
                                    <img
                                        src={item.img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <img className='arrow left' onClick={() => handleClick('left')} src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" />
            <img className='arrow right' onClick={() => handleClick('right')} src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png" />
        </div>
    );
}

export default Works;