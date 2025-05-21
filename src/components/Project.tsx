import React from "react";
import CampusFire from '../assets/images/campus-fire-users.png';
import SafeHavenLogin from '../assets/images/safehaven-login.png';
import MindNMe from '../assets/images/MindNMe.png';
import CodeClash from '../assets/images/code-clash.png';
import Ecometrics from '../assets/images/ecometrics.png';
import Warcraft from '../assets/images/warcraft.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects (Scrollable Images)</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://github.com/orgs/Campus-Fire/" target="_blank" rel="noreferrer">
                        <img src={CampusFire} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://github.com/orgs/Campus-Fire/" target="_blank" rel="noreferrer"><h2>CampusFire</h2></a>
                <p>Developed a vibrant iOS social platform for University of Calgary students using SwiftUI, with an Events feature powered by seven custom GraphQL schemas and mutations.</p>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://github.com/rohitNair21/CalgaryHacks?tab=readme-ov-file" target="_blank" rel="noreferrer">
                        <img src={SafeHavenLogin} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://github.com/rohitNair21/CalgaryHacks?tab=readme-ov-file" target="_blank" rel="noreferrer"><h2>SafeHaven</h2></a>
                <p>Designed a React Native mobile app to support immigrant women facing domestic violence, featuring live chat with real-time translation, safe community peer-support spaces, and a resource hub—powered by Firebase, Next.js & MongoDB, Google Maps & Translate APIs, Clerk for auth, and AWS S3 & CloudFront for storage and caching.</p>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://www.childrenandyouthmentalhealth.com/" target="_blank" rel="noreferrer">
                        <img src={MindNMe} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://www.childrenandyouthmentalhealth.com/" target="_blank" rel="noreferrer"><h2>Mind&Me</h2></a>
                <p>Led a team of six developers to build an end-to-end React Native prototype with customizable user profiles backed by SQLite and the OpenAI API, piloted with 12 users, and presented to industry stakeholders to secure $10 000 in funding.</p>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://github.com/DaveOGQ/SENG513W25-FinalProject-CodeClash" target="_blank" rel="noreferrer">
                        <img src={CodeClash} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://github.com/DaveOGQ/SENG513W25-FinalProject-CodeClash" target="_blank" rel="noreferrer"><h2>Code Clash</h2></a>
                <p>Built a real-time competitive coding platform with a React + Tailwind CSS frontend and a Spring Boot backend (using WebSocket endpoints for live gameplay, PostgreSQL for persistence, and Judge0 for sandboxed code execution), featuring lobby management, difficulty tiers, live leaderboards, and OAuth via Firebase Auth.</p>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://devpost.com/software/portfolio-ecometrics" target="_blank" rel="noreferrer">
                        <img src={Ecometrics} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://devpost.com/software/portfolio-ecometrics" target="_blank" rel="noreferrer"><h2>Ecometrics</h2></a>
                <p>Built a React + TypeScript & MaterialUI frontend and ExpressJS/Node.js backend to let users upload Yahoo Finance portfolios, fetch ESG-related news via the GDELT Doc API, compute sentiment-based ESG scores for each holding, and accelerate performance with NodeCache.</p>
            </div>
            <div className="project">
                <div className="image-wrapper">
                    <a href="https://docs.google.com/document/d/1N_cWtvfc9KobesOYK55itKkAuViqbTyz/edit?usp=sharing&ouid=115808004934181553801&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                        <img src={Warcraft} className="zoom" alt="thumbnail"/>
                    </a>
                </div>
                <a href="https://docs.google.com/document/d/1N_cWtvfc9KobesOYK55itKkAuViqbTyz/edit?usp=sharing&ouid=115808004934181553801&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Raid Team Performance Predictor</h2></a>
                <p>Built a data-driven model to forecast World of Warcraft raid success by extracting encounter metrics via the WarcraftLogs GraphQL API, preprocessing with Python and Pandas, and training a Random Forest regressor in scikit-learn. The pipeline aggregates individual player stats (damage, deaths, fight duration) into team-level features and achieves high predictive accuracy, offering actionable insights to optimize raid strategies.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
