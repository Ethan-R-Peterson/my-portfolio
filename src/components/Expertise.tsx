import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// DATA
const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "Pandas",
    "Spark",
    "Tableau",
    "PowerBI",
    "Matplotlib",
    "Seaborn",
    "Jupyter"
];

// Development
const labelsSecond = [
    "Git",
    "C++",
    "HTML",
    "CSS3",
    "AWS",
    "VSCode",
    "Copilot",
    "API"
];

// ML
const labelsThird = [
    "Scikit-Learn",
    "PyTorch",
    "Numpy",
    "TensorFlow",
    "OpenAI",
    "OpenCV",
    "Hugging Face",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <h3><FontAwesomeIcon icon={faDatabase} size="2x"/> Data Science</h3>
                    <p>My major! My related coursework includes: Data Mining, Probability and Statistics, and Information Retrieval and Websearch. I'm involved in Data clubs like Michigan Data Consulting and Michigan Data Science Team.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3><FontAwesomeIcon icon={faCode} size="2x"/> Software Development</h3>
                    <p>I enjoy building full-stack applications and data-driven systems. My related coursework includes: Web Systems, Programming and Data Structures, and Database Management Systems. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3><FontAwesomeIcon icon={faBrain} size="2x"/> Machine Learning</h3>
                    <p> I'm most excited to build foundational AI knowledge. I'm involved in U-M's Student AI Lab and read papers in my free time. My related coursework includes: Machine Learning, Computer Vision, and Applied Regression.</p>
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