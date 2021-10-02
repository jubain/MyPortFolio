import React, { useState } from 'react';
import './works.css'
import HttpIcon from '@mui/icons-material/Http';
import ChatIcon from '@mui/icons-material/Chat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CircleIcon from '@mui/icons-material/Circle';

const data = [
    {
        id: "1",
        icon: 'web',
        title: "Web Development",
        desc:
            "I developed a website for a construction company. I used React JS to make this website and used Netlify to host it.",
        img:
            "./assets/houseBuilds.png",
        link: "https://www.housebuildsolutions.net/"
    },
    {
        id: "2",
        icon: "weather",
        title: "Weather App",
        desc:
            "This app lets user see the weather of their location. I used Node JS(Express JS) to make this app. This app get uses openweather's website's API to get weather data.",
        img:
            "./assets/weatherApp.png",
        link: 'https://jubeen-weather-application.herokuapp.com/'
    },
    {
        id: "3",
        icon: "chat",
        title: "Chat App",
        desc:
            "This app is chat room app. I used Node JS(Express JS) and Socket.io to make this.",
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

    const handleTouch = () => {
        switch (currentSlider) {
            case currentSlider > data.length:
                setcurrentSlider(0)
                break;
            case (currentSlider < data.length && currentSlider > 0):
                setcurrentSlider(2)
                break
            default:
                setcurrentSlider(1)
                break;
        }
        // if (currentSlider > data.length) {
        //     setcurrentSlider(0)
        // } else {
        //     if (currentSlider >= 0 && currentSlider < data.length) {
        //         setcurrentSlider(currentSlider + 1)
        //     } else {

        //     }
        // }
    }

    const checkIcon = (icon) => {
        switch (icon) {
            case 'web':
                return <HttpIcon />

            case 'weather':
                return <WbSunnyIcon />

            default:
                return <ChatIcon />
        }
    }

    return (
        <div id='works' className='works'>
            <h1>Works</h1>

            <div className='slider' style={{ transform: `translateX(-${currentSlider * 100}vw)` }} onTouchMove={handleTouch}>
                {data.map(item => {
                    return (
                        <div className='container'>
                            <div className='item'>
                                <div className='left'>
                                    <div className='leftContainer'>
                                        <div className='imgContainer'>
                                            {/* <img src={item.icon} alt="" /> */}
                                            {checkIcon(item.icon)}
                                            {/* <PhoneAndroidIcon className='img' /> */}
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc} </p>
                                        <span><a href={item.link} target="_blank">Link</a></span>
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
            <div className="pages">
                <CircleIcon className='dots' style={currentSlider === 0 ? { color: 'white' } : null} />
                <CircleIcon className="dots" style={currentSlider === 1 ? { color: 'white' } : null} />
                <CircleIcon className="dots" style={currentSlider === 2 ? { color: 'white' } : null} />
            </div>
        </div>
    );
}

export default Works;