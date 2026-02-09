import React from "react";
import crowd from '../assets/images/crowd.png';
import arch from '../assets/images/Arch.avif';
import drone from '../assets/images/drone.png';
import alzheimer from '../assets/images/alzheimer.jpg';
import crane from '../assets/images/crane.jpg';
import datathon from '../assets/images/datathon.png';


import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Ethan-R-Peterson/Alzheimer-s_MRI_Classifier" target="_blank" rel="noreferrer"><img src={alzheimer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Ethan-R-Peterson/Alzheimer-s_MRI_Classifier" target="_blank" rel="noreferrer"><h2>Alzheimer's MRI Classifier</h2></a>
                <p>Developed and evaluated CNN models (VGG16, ResNet-50) for MRI-based Alzheimer’s stage classification.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Ethan-R-Peterson/Michigan_Drone_Technology/tree/main" target="_blank" rel="noreferrer"><img src={drone} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Ethan-R-Peterson/Michigan_Drone_Technology/tree/main" target="_blank" rel="noreferrer"><h2>Rescue Drone</h2></a>
                <p>Built an end-to-end drone-based human detection system, combining custom hardware, thermal imaging, and a PyTorch/OpenCV vision pipeline.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MichiganDataScienceTeam/W26-PaperZero" target="_blank" rel="noreferrer"><img src={crane} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MichiganDataScienceTeam/W26-PaperZero" target="_blank" rel="noreferrer"><h2>RL Origami Solver (In-Progress)</h2></a>
                <p>Building and training a Dreamer-style reinforcement learning agent for long-horizon planning in 2D origami design, using a Google Research compute grant on UM Great Lakes HPC.</p>
            </div>
            <div className="project">
                <a href='https://drive.google.com/file/d/1rw2LxGFuNpZL0w6pFsoX3wwEdrT4cncB/view?usp=sharing' target="_blank" rel="noreferrer"><img src={datathon} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='https://drive.google.com/file/d/1rw2LxGFuNpZL0w6pFsoX3wwEdrT4cncB/view?usp=sharing' target="_blank" rel="noreferrer"><h2>Datathon - HSR Economic Imapact Analysis</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <a href='https://drive.google.com/file/d/1FQqQmignhf7zrV7JfNwj3n_wuEDuqHTm/view?usp=sharing' target="_blank" rel="noreferrer"><img src={crowd} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='https://drive.google.com/file/d/1FQqQmignhf7zrV7JfNwj3n_wuEDuqHTm/view?usp=sharing' target="_blank" rel="noreferrer"><h2>CrowdSearch P2P Network Reproduction</h2></a>
                <p>This project ultimately reimplements a P2P Network crowdsearch design from "Rethinking Counting and Localization in Crowds: A Purely Point-Based Framework.", prefaced by synthetic data generation and yolov8 testing to explore object detection in dense crowd environments.</p>
            </div>
            <div className="project">
                <a href='https://drive.google.com/file/d/1ll4BmGns9-KgSQqO5Lt_2XhXxFC8hj3a/view?usp=sharing' target="_blank" rel="noreferrer"><img src={arch} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href='https://drive.google.com/file/d/1ll4BmGns9-KgSQqO5Lt_2XhXxFC8hj3a/view?usp=sharing' target="_blank" rel="noreferrer"><h2> Archeologist Database Optimization</h2></a>
                <p>Cleaned and optimized a research database for an international archaeology team in Mongolia by redesigning data collection forms, migrating data from a legacy server to ODK Central via API, and filmed tutorials for a non-technical team.</p>
                <p> Click{' '} <a href="https://drive.google.com/file/d/1CBkL9lPOZki1GM0HdEjVDM4MwwK1TY0G/view?usp=sharing" target="_blank" rel="noopener noreferrer" className = "here-link">HERE</a>{' '}to see one of the filmed tutorials.</p>
                <p> Click{' '} <a href="https://www.nomadsciencemongolia.com/" target="_blank" rel="noopener noreferrer" className = "here-link">HERE</a>{' '}to learn about NOMAD Science.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;