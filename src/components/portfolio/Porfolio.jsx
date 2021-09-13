import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import { webPortfolio, featuredPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'
import './portfolio.css'

function Porfolio(props) {

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web Apps'
        },
        {
            id: 'mobile',
            title: 'Mobile Apps'
        },
        {
            id: 'design',
            title: 'Designs'
        },

    ]


    const [selected, setselected] = useState('featured')
    const [data, setdata] = useState([])

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setdata(featuredPortfolio)
                break;
            case 'web':
                setdata(webPortfolio)
                break;
            case 'mobile':
                setdata(mobilePortfolio)
                break;
            case 'design':
                setdata(designPortfolio)
                break;
            default:
                setdata(featuredPortfolio)

        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => {
                    return (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setselected={setselected}
                            id={item.id}
                        />
                    )
                })}
            </ul>
            <div className='container'>
                {data.map(item => {
                    return (
                        <div className="item">
                            <img src={item.img} />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Porfolio;