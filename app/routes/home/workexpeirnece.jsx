import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import styles from './work-experience.module.css';
import unimelbLogo from '~/assets/unimelb-logo.jpg';
import sensureLogo from '~/assets/sensure-logo.png';
import wehiLogo from '~/assets/wehi-logo.jpg';
import scorklLogo from '~/assets/scorkl-logo.png';
const WorkExperience = () => {
  const experiences = [
    {
      company: 'The University of Melbourne',
      role: 'IT Technician (Students@Work Program)',
      startDate: 'May 2022',
      endDate: 'Dec 2022',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Collaborated with 19 students to oversee Echo360 hybrid lecturing systems across learning spaces on campus',
        'Offered IT support to lecturers and speakers inexperienced with university computer system located within 15 campus buildings',
      ],
      logoUrl: unimelbLogo, // Replace with actual path
    },
    {
      company: 'WEHI (Walter and Eliza Hall Institute of Medical Research)',
      role: 'Software Engineer (Intern)',
      startDate: 'Nov 2023',
      endDate: 'Feb 2024',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Guided the Genomics Metadata Multiplexing group at WEHI where a web application was made using Shiny and Flask to convert FACS data to readable spreadsheets for 20 researchers and subject matter experts at WEHI Genomics team',
        'Leveraged regression testing using Python and relevant libraries including Pandas and SciPy to analyse and compare 20 FACS file samples to validate required format needed by WEHI researchers',
        'Partnered with 10 subject matter experts from WEH\'s genomics and flow cytometry labs to handle data analysis and processing, utilizing JupyterLab and MATLAB, displaying effective cooperation, conversational and interpersonal skills',
      ],
      logoUrl: wehiLogo, // Replace with actual path
    },
    {
      company: 'Sensure Medical',
      role: 'Lead Software Engineer',
      startDate: 'Aug 2024',
      endDate: 'Present',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Designed and built a full-stack website for Sensure Medical startup, constructed using React and Tailwind CSS for frontend, Spring Boot for backend, SQL for database and Figma for prototyping, resulting in over 100 daily visits',
        'Spearheaded the utilization of WaveNet and BERT models to analyze over 20 epidural needle experiments and built a classification model that predicts the skin layer a needle has punctured based on puncture sound using TensorFlow MLP',
      ],
      logoUrl: sensureLogo, // Replace with actual path
    },
    {
      company: 'Scorkl',
      role: 'Software Engineer',
      startDate: 'Nov 2024',
      endDate: 'Present',
      location: 'Melbourne, Australia',
      responsibilities: [
        'Led the software development team at Scorkl to develop a wholesale B2B platform using Shopify liquid APIs and libraries, integrating with Gorgias, Klaviyo and Sufio CRM platforms, facilitating over $20,000 in sales',
        'Developed a web crawler and web scraper emailing service using Scrapy and SMTP, integrating with Airtable and SQL relational databases to write, store and email over 500 business contacts to facilitate B2B sales opportunities',
      ],
      logoUrl: scorklLogo, // Replace with actual path
    },
  ];

  return (
    <div className={styles.workExperience}>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.dateColumn}>
              <div className={styles.date}>
                <Calendar size={14} />
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  src={exp.logoUrl}
                  alt={`${exp.company} logo`}
                  className={styles.logo}
                />
                <div className={styles.headerText}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.role}>{exp.role}</span>
                </div>
              </div>
              <div className={styles.location}>
                <MapPin size={14} />
                <span>{exp.location}</span>
              </div>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>
                    <p className={styles.responsibilityText}>{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
