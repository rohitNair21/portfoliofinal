import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "React Native",
    "SwiftUI",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "GraphQL",
    "Django",
    "Python",
    "SQLite",
    "PostgreSQL",
    "MongoDB"
];

const labelsSecond = [
    "AWS EC2",
    "AWS S3",
    "AWS SWS",
    "AWS Bedroc",
    "Git",
    "npm",
    "Linux",
    "Bash",
    "cron",
];

const labelsThird = [
    "OpenAI",
    "AWS Bedrock",
    "LangChain",
    "Streamlit",
    "Tensorflow",
    "Python",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack & Mobile Development
                    </h3>
                    <p>Design and deliver end-to-end web and mobile applications using modern frameworks and best practices across the SDLC.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud Infrastructure & DevOps
                    </h3>
                    <p>Architect and maintain scalable cloud environments, automate deployments, testing, and CI/CD pipelines to support robust production releases.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning Integration
                    </h3>
                    <p>Integrate large-scale language models and ML pipelines into applications for intelligent features and data-driven insights.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;