import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaClipboardCheck, FaChalkboardTeacher, FaFingerprint } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import './SecurityGuarding.css';

const SecurityGuarding = () => {
    const navigate = useNavigate();
    // Security services data
    const guardingServices = [
        {
            title: "Static Guarding Solutions",
            icon: "🛡️",
            description: "24/7 manned guarding services for permanent security presence at your premises",
            features: [
                "Access control management",
                "Visitor screening & logging",
                "Perimeter patrols",
                "Incident response teams"
            ]
        },
        {
            title: "Mobile Patrol Services",
            icon: "🚔",
            description: "Randomized armed patrols to maintain security visibility across multiple sites",
            features: [
                "GPS-tracked vehicles",
                "Electronic checkpoint scanning",
                "Rapid response units",
                "Night vision capability"
            ]
        },
        {
            title: "Corporate Security",
            icon: "💼",
            description: "Executive protection and workplace security solutions",
            features: [
                "Undercover security officers",
                "VIP protection details",
                "Workplace violence prevention",
                "Asset protection programs"
            ]
        }
    ];

  const securityFeatures = [
    {
        icon: <FaUserShield className="feature-icon" />,
        title: "Licensed & Certified Guards",
        description: "All personnel are vetted and licensed under the Private Security Regulation Act (PSRA).",
    
    },
    {
        icon: <FaClipboardCheck className="feature-icon" />,
        title: "Rigorous 3-Step Screening",
        description: "Includes criminal background checks, psychometric testing and professional vetting.",
    },
    {
        icon: <FaChalkboardTeacher className="feature-icon" />,
        title: "Ongoing Training",
        description: "Monthly refresher courses ensure our guards stay up to date with latest protocols.",
    },
    {
        icon: <FaFingerprint className="feature-icon" />,
        title: "Biometric & Real-Time Tech",
        description: "Integrated systems provide live reporting and smart surveillance for accountability.",
    },

  ];

    return (
        <div className="security-guarding-page">
            <section className="guarding-hero">
                <div className="hero-content container">
                    <h1>Professional Security Guarding Services</h1>
                    <p>Nationwide protection with locally-trained security professionals</p>
                    <button className="cta-button" onClick={() => navigate('/contacts')}>
                        Request Guarding Quote
                    </button>
                </div>
            </section>

            <section className="guarding-intro container">
                <h2>Comprehensive Physical Security Solutions</h2>
                <div className="intro-content">
                    <p>As a licensed security provider under the Private Security Regulatory Authority, Exlent Touch Security Services offers:</p>
                    <div className="standards-grid">
                        <div className="standard-card">
                            <div className="standard-icon">⭐</div>
                            <h3>PSRA Compliance Guarantee</h3>
                            <p>All operations meet regulatory requirements</p>
                        </div>
                        <div className="standard-card">
                            <div className="standard-icon">🌍</div>
                            <h3>National Coverage</h3>
                            <p>Services available across all 47 counties</p>
                        </div>
                        <div className="standard-card">
                            <div className="standard-icon">⏱️</div>
                            <h3>Rapid Deployment</h3>
                            <p>Guards deployed within 24hrs of contract signing</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-types">
    <div className="container">
            <h2>Our Guarding Specializations</h2>
    <div className="services-horizontal">
      {guardingServices.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul className="service-features">
            {service.features.map((feature, fIndex) => (
              <li key={fIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


            <section className="security-features container">
                <h2>Why Choose Our Security Personnel</h2>
                <div className="features-grid">
                    {securityFeatures.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="technology-section">
                <div className="container">
                    <h2>Integrated Security Technology</h2>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <div className="tech-icon">📡</div>
                            <h3>Real-Time Reporting</h3>
                            <p>Digital incident reporting with photo evidence</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">📱</div>
                            <h3>Mobile Supervision</h3>
                            <p>GPS tracking of all patrol routes and checkpoints</p>
                        </div>
                        <div className="tech-card">
                            <div className="tech-icon">🔒</div>
                            <h3>Biometric Access</h3>
                            <p>Fingerprint verification for restricted areas</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coverage-section">
                <div className="container ">
                    <h2>National Coverage Areas</h2>
                    <div className="coverage-content">
                        <div className="coverage-map">
                            {/* Add map component or image here */}
                            <p className="text-gray-500 mt-24 text-sm">[Map Placeholder]</p>
                        </div>
                        <div className="coverage-list">
                            <h3>Key Service Regions:</h3>
                            <ul>
                                {[
                                    'Nairobi Metropolitan Area',
                                    'Central Kenya Circuit',
                                    'Coastal Region',
                                    'Northern Frontier',
                                    'Western Frontier',
                                ].map((region, idx) =>(
                                    <li key={idx}>
                                        <MdLocationOn className="icon" /> {region}
                                    </li>
                                ))}
                            </ul>
                            <p>
                                <MdPhone className="icon phone-icon" />
                                24/7 Emergency Response: {' '}
                                <a href="tel:+254735111444">+254 735 111 444</a>   
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecurityGuarding;