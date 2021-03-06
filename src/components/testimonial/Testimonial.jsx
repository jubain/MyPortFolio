import React from 'react';
import './timeline.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import timeLine from '../../timeline'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Testimonial(props) {
    let workIconStyle = { background: "#06d6a0" }
    let schoolIconStyle = { background: "#f9c74f" }

    return (
        <div className="timeline">
            <h1 className="title">Timeline</h1>
            <VerticalTimeline>
                {
                    timeLine.map(element => {
                        let isWorkIcon = element.icon === 'Work'
                        let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== ""

                        return (
                            <VerticalTimelineElement

                                key={element.id}
                                date={element.date}
                                dateClassName="date"
                                icon={isWorkIcon ? <WorkIcon fontSize="12" /> : <SchoolIcon />}
                                contentStyle={{ backgroundColor: '#15023a', color: 'white' }}
                                contentArrowStyle={{ borderLeft: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                            >
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}</p>
                                {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>)}

                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    );
}

export default Testimonial;