import React from "react";
import '../assets/styles/Timeline.scss'

interface Experience {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Project Lead",
    date: "January 2026 - Present",
    location: "Michigan Data Consulting Club",
    description: "Leading data cleaning, analysis, and forecasting of ongitudinal engagement patterns using 25k+ FileMaker and Qualtrics records."
  },
  {
    id: 2,
    title: "Research Assistant",
    date: "January 2026 - Present",
    location: "Gray Rain + U-M Statistical Online Computation Resource",
    description: "Developing virtual hospital simulations and privacy-preserving synthetic patient data, including FHIR-integrated pipelines and 3D medical volume obfuscation."
  },
  {
    id: 3,
    title: "Datathon Finalist",
    date: "February 2026",
    location: "Business + Tech Datathon",
    description: "Argued a data-driven case for Houston–New Orleans high-speed rail, modeling housing, GDP, and tax revenue impacts under multiple commuter adoption scenarios using state economic data."
  }
];

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-box"
            >
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-date">{exp.date}</p>
                {exp.location && <p className="experience-location">{exp.location}</p>}
                <p className="experience-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;