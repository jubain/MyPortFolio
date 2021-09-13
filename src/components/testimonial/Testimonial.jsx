import React from 'react';
import './testimonial.css'

const data = [
    {
        id: 1,
        name: "Tom Durden",
        title: "Senior Developer",
        img:
            "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        icon: "assets/twitter.png",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
        id: 2,
        name: "Alex Kalinski",
        title: "Co-Founder of DELKA",
        img:
            "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        icon: "assets/youtube.png",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
        featured: true,
    },
    {
        id: 3,
        name: "Martin Harold",
        title: "CEO of ALBI",
        img:
            "https://i.pinimg.com/originals/17/56/8f/17568fcd478e0699067ca7b9a34c702f.png",
        icon: "assets/linkedin.png",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
];

function Testimonial(props) {
    return (
        <div className='testimonial' id='testimonial'>
            <h1>Testimonials</h1>
            <div className='container'>
                {data.map(item => {
                    return (
                        <div className={item.featured ? 'card featured' : 'card'}>
                            <div className='top'>
                                <img src='https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/right-arrow.png' className="left" alt="" />
                                <img src={item.img} alt="" className="user" />
                                <img src={item.icon} alt="" className="right" />
                            </div>
                            <div className='center'>
                                {item.desc}
                            </div>
                            <div className='bottom'>
                                <h3>{item.name}</h3>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Testimonial;