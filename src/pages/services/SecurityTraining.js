import React from 'react';
import './SecurityTraining.css';
const SecurityTraining = () => {
    return (
        <div className="secuirty-training-page">
            <section className="training-hero">
                <div className="hero-content">
                    <h1>Professional Security Training Programs</h1>
                    <p>Certified courses to develop skilled security personnel and organizational preparedness</p>

                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contacts'}
                    
                    >
                        Enroll in Upcoming Courses

                    </button>
                </div>
            </section>

            {/*Accreditation Badge */}
            <section className="accreditation-banner">
                <div className="container">
                    <div className="accreditation-content">
                        <div className="badge">ISO 29993:2017 Certified</div>
                        <p>Out training programs meet international standards for learning services</p>
                    </div>
                </div>
            </section>

            {/*Core Courses */}

            <section className="core-courses">
                <div className="container">
                    <h2>Our Signature Training Programs</h2>
                    <div className="course-grid">
                        <div className="course-card">
                            <h3>Basic Security Officer Course</h3>
                            <ul>
                                <li>80-hour comprehensive training</li>
                                <li>State licensing preparation</li>
                                <li>Conflict de-escalation techniques</li>
                                <li>legal aspects of security work</li>
                            </ul>
                            <div className="course-duration">2 Weeks</div>
                        </div>
                        <div className="course-card">
                            <h3>Executive Protection Specialist</h3>
                            <ul>
                                <li>Advanced threat assessment</li>
                                <li>Protective formations</li>
                                <li>Emergency evacuation protocols</li>
                                <li>Defensive driving techniques</li>
                            </ul>
                            <div  className="course-duration">4 Weeks</div>
                        </div>
                        <div className="course-card">
                            <h3>Security Supervisor Certification</h3>
                            <ul>
                                <li>Team leadership training</li>
                                <li>Incident command systems</li>
                                <li>Report writing & documentation</li>
                                <li>Client realtions management</li>
                            </ul>
                            <div className="course-duration">3 Weeks</div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Specialized Training */}
            <section className="specialized-training">
                <div className="container">
                    <h2>Specialized Security Training</h2>
                    <div className="speciality-grid">
                        <div className="speciality-card">
                            <h3>Crowd Control Tactics</h3>
                            <p>Techniques for managing large gathering and events</p>
                            <span className="cert-badge">PSA Approved</span>
                        </div>
                        <div className="speciality-card">
                            <h3>Cybersecurity Awareness</h3>
                            <p>Digital threat prevention for physical security teams</p>
                            <span className="cert-badge">NEW</span>
                        </div>
                        <div className="speciality-card">
                            <h3>K9 Handling</h3>
                            <p>Certification for security dog teams</p>
                            <span className="cert-badge">IK9 Certified</span>
                        </div>
                        <div className="specialty-card">
                            <h3>First Responder Training</h3>
                            <p>Medical emergency response certification</p>
                            <span className="cert-badge">Red Cross Accredited</span>
                        </div>
                    </div>
                </div>
            </section>
            
            {/*Training Methodology */}
            <section className="training-method">
                <div className="container">
                    <h2>Our Proven Training Approach</h2>
                    <div className="method-steps">
                        <div className="method-card">
                            <div className="step-icon">📚</div>
                            <h3>Theoretical Foundation</h3>
                            <p>Classroom instruction on security principles</p>
                        </div>
                        <div className="method-card">
                            <div className="step-icon">🛡️</div>
                            <h3>Practical Drills</h3>
                            <p>Scenario-based field exercises</p>
                        </div>
                        <div className="method-card">
                            <div className="step-icon">🎯</div>
                            <h3>Skill Assessment</h3>
                            <p>Performance evaluations and feedback</p>
                        </div>
                        <div className="method-card">
                            <div className="step-icon">📝</div>
                            <h3>Certification</h3>
                            <p>Official recognition of competency</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Corporate Training */}
            <section className="corporate-training">
                <div className="container">
                    <h2>Custom Corporate Security Training</h2>
                    <div className="corporate-grid">
                        <div className="corporate-card">
                            <h3>Workplace Violence Prevention</h3>
                            <p>Employee awareness and response training</p>
                        </div>
                        <div className="corporate-card">
                            <h3>Retail Loss Prevention</h3>
                            <p>Shoplifting deterrence and detention protocols</p>
                        </div>
                        <div className="corporate-card">
                            <h3>Executive Safety</h3>
                            <p>Travel security and situational awareness</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*CTA Section */}
            <section className="training-cta">
                <div className="container">
                    <h2>Invest in professional Security Training</h2>
                    <p>Upgrade your team's capabilities or launch your security career with our certified programs</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contact'}
                    
                    >
                        Request Course Catalog

                    </button>
                </div>
            </section>
        </div>
    );
};

export default SecurityTraining;