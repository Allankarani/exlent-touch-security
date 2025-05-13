import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    // Updated testimonials with actual client references from profile (Page 9)
    const clientPortfolio = [
        { name: "IBIS Hotel Nairobi", sector: "Hospitality" },
        { name: "Ruban Textile Isiolo", sector: "Manufacturing" },
        { name: "Samba Lodge Nanyuki", sector: "Tourism" },
        { name: "Meru Motor Spot", sector: "Automotive" },
        { name: "Isiolo Water Department", sector: "Government" },
        { name: "Legacy Apartments Meru", sector: "Real Estate" }
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-content">
                    <h1>About Exlent Touch Security Services</h1>
                    <p>Your Peace of Mind, Our Delivered Promise</p>
                    <button className="cta-button" onClick={() => navigate('/contacts')}>
                        Request Security Audit
                    </button>
                </div>
            </section>

            <section className="company-overview">
                <div className="container">
                    <h2>Our Security Expertise</h2>
                    <div className="overview-content">
                        <p>
                            Established as one of Kenya's leading security companies, Exlent Touch Security Services Limited 
                            provides integrated, risk-based security solutions. Headquartered in Mwiki along Kasarani Highway, 
                            we operate nationwide with:
                        </p>
                        <ul className="strengths-list">
                            <li>🛡️ ISO 27001:2014 information security practices</li>
                            <li>📋 Public liability & workman's compensation insurance</li>
                            <li>👮♂️ 100% vetted security personnel</li>
                            <li>📡 Advanced Hikvision CCTV technology</li>
                        </ul>
                    </div>
                    
                    <div className="achievements-grid">
                        <div className="achievement-card">
                            <div className="achievement-number">10+</div>
                            <div className="achievement-text">Years Management Experience</div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-number">24/7</div>
                            <div className="achievement-text">Supervisor Patrols</div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-number">100%</div>
                            <div className="achievement-text">Locally Recruited Staff</div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-number">15+</div>
                            <div className="achievement-text">Industry Certifications</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="leadership-section">
                <div className="container">
                    <h2>Security Leadership Team</h2>
                    <div className="leadership-grid">
                        <div className="leader-card">
                            <h3>Samson Mwenda Klunga</h3>
                            <p className="position">Managing Director</p>
                            <ul className="leader-qualifications">
                                <li>✔ 10+ years security management experience</li>
                                <li>✔ Business Administration specialist</li>
                                <li>✔ Security technology implementation expert</li>
                            </ul>
                        </div>
                        <div className="leader-card">
                            <h3>Nicodemus Mawira Kimari</h3>
                            <p className="position">General Manager</p>
                            <ul className="leader-qualifications">
                                <li>✔ 15+ years security operations experience</li>
                                <li>✔ Certified DISCO CCNA Expert</li>
                                <li>✔ ICT security systems specialist</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision">
                <div className="container">
                    <div className="mission-card">
                        <h3>Our Mission</h3>
                        <blockquote>
                            "To be the best and most efficient security service provider through:
                            <ul className="mission-points">
                                <li>✅ Careful staff selection aligned with company ethics</li>
                                <li>✅ Superior training programs</li>
                                <li>✅ Community-focused recruitment</li>
                                <li>✅ Continuous technology upgrades</li>
                            </ul>
                        </blockquote>
                    </div>

                    <div className="operations-card">
                        <h3>Operational Excellence</h3>
                        <div className="operations-grid">
                            <div className="operation-item">
                                <div className="op-icon">🔍</div>
                                <h4>Rigorous Screening</h4>
                                <p>All guards must provide certificates of good conduct and credible references</p>
                            </div>
                            <div className="operation-item">
                                <div className="op-icon">🎓</div>
                                <h4>Continuous Training</h4>
                                <p>Regular drills in disaster management, customer care, and VIP protection</p>
                            </div>
                            <div className="operation-item">
                                <div className="op-icon">📋</div>
                                <h4>Quality Assurance</h4>
                                <p>Random supervisor checks and equipment audits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client-portfolio">
                <div className="container">
                    <h2>Trusted By Leading Organizations</h2>
                    <div className="clients-grid">
                        {clientPortfolio.map((client, index) => (
                            <div className="client-card" key={index}>
                                <div className="client-sector">{client.sector}</div>
                                <h4>{client.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2>Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card red-bg">
                            <div className="value-icon">👔</div>
                            <h4>Professionalism</h4>
                            <p>K.C.S.E D+ minimum requirement for all personnel</p>
                        </div>
                        <div className="value-card blue-bg">
                            <div className="value-icon">🤝</div>
                            <h4>Client Focus</h4>
                            <p>Customized security solutions for each partner</p>
                        </div>
                        <div className="value-card dark-bg">
                            <div className="value-icon">⚡</div>
                            <h4>Rapid Response</h4>
                            <p>Guaranteed immediate reaction to security alerts</p>
                        </div>
                        <div className="value-card navy-bg">
                            <div className="value-icon">🌍</div>
                            <h4>Community Impact</h4>
                            <p>Priority to local community employment</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="welfare-section">
                <div className="container">
                    <h2>Guard Welfare Commitment</h2>
                    <div className="welfare-grid">
                        <div className="welfare-card">
                            <div className="welfare-icon">👕</div>
                            <h4>Full Uniform & Gear</h4>
                            <p>2 pairs of uniforms, military boots, and rain gear provided</p>
                        </div>
                        <div className="welfare-card">
                            <div className="welfare-icon">🏥</div>
                            <h4>Health Coverage</h4>
                            <p>NHIF & Medical insurance for all personnel</p>
                        </div>
                        <div className="welfare-card">
                            <div className="welfare-icon">📚</div>
                            <h4>Career Development</h4>
                            <p>Regular training at our security academy</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;