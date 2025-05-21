import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2021 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Computer Science Student @ University of Calgary</h3>
            <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
            <p>
            • Bachelor of Science in Computer Science
            <br/>      • Cumulative GPA: 3.6 / 4.0
            <br/>• Awards: IB Entrance Award, Alexander Rutherford Scholarship, TC Energy STEM Scholarship
            <br/>• Relevant Coursework: Data Structures, Operating Systems, Algorithm Analysis, Database Management Systems, Computing Machinery, Software Engineering, Programming Paradigms, Human-Computer Interaction
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern @ VoPay</h3>
            <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
            <p>
            • Developed a data enrichment RESTful endpoint which utilized AWS Bedrock, FIFO SQS, Python, and an Apache server to extract the company name, MCC, and category from bank statements
            <br/>
            • Constructed a document analysis tool utilizing numerous AWS services (EC2, Bedrock, S3) and Python to query over 300 internal due diligence documents and formulate detailed responses
            <br/>
• Communicated with developers to create Confluence documentation and analytics reports utilizing DataDog and Jupyter Notebook            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Software Developer @ Youth Mental Health Committee</h3>
            <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
            <p>
            • Directed a team of 6 professional developers in the creation of the YouthC mental health application 
            <br/>
• Constructed an end-to-end prototype with customizable user profiles using ReactNative, SQLite, and the OpenAI API, successfully hosting 12 trial users
<br/>
  • Presented functional application to a board of industry professionals, securing $10,000 in project funding            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Jan 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">iOS Developer @ CampusFire</h3>
            <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
            <p>
            • Pioneered the development of the frontend SwiftUI design with advanced dynamic rendering and scroll effects for an iOS social networking app
            <br/>
• Collaborated with four other developers to refine the existing design Figma prototypes before transferring them to custom UI elements adhering to SwiftUI protocols
<br/>
• Played a pivotal role in the frontend/backend integration of the Events section by producing the necessary GraphQL schemas, queries, and mutations, enhancing the app's functionality and user engagement.
<br/>
• Participated in the creation of a pitch deck for the project helping the project secure $150,000 in seed grant money

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vice President of Events @ Schulich Ignite</h3>
            <h4 className="vertical-timeline-element-subtitle">Calgary, AB</h4>
            <p>
            • Hosted 9 large-scale events, including hackathons and professional coding showcases
            <br/>• Connected the organization with 15+ new clubs and industry professionals
            <br/>• Led team to create remote OpenProcessing Python interview system, improving recruitment practices and reducing average interview time by almost 20%
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;