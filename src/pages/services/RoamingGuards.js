import React from 'react';
import './RoamingGuard.css';
const RoamingGuards = () => {
    return (
        <div className="roaming-guards-page">
            <section className="roaming-hero">
                <div className="hero-overlay">
                    <h1>Mobile Patrol & Roaming Guard Services</h1>
                    <p>Dynamic security solutions that adapt to your risk profile with visible deterrence</p>

                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contact'}
                    >
                        Schedule a Risk Assessment

                    </button>
                </div>
            </section>

            <section className="value-props">
                <div className="container">
                    <h2>Why Roaming Guards Outperform Static Security</h2>
                    <div className="props-grid">
                        <div className="prop-card">
                            <div className="prop-icon">🚔</div>
                            <h3>Strategic Coverage</h3>
                            <p>Our guards follow intelligent patrol patterns visibility across your entire property</p>
                        </div>
                        <div className="prop-card">
                            <div className="prop-icon">💰</div>
                            <h3>Cost-Effective</h3>
                            <p>Cover more ground with fewer personnel compared to fixed-post guarding</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="patrol-options">
                <div className="container">
                    <h2>Our Roaming Guard Solutions</h2>
                    <div className="options-grid">
                        <div className="option-card">
                            <h3>Vehicle Patrols</h3>
                            <ul>
                                <li>Marked security vehicles for high-visibility deterrences</li>
                                <li>GPS-tracked routes with real-time reporting</li>
                                <li>Ideal for large campuses or multiple sites</li>
                            </ul>
                        </div>
                        <div className="option-card">
                            <h3>Foot patrols</h3>
                            <ul>
                                <li>Detailed interior/exterior inspections</li>
                                <li>Access point verification</li>
                                <li>Personal interaction with staff/visitors</li>
                            </ul>
                        </div>
                        <div className="option-card">
                            <h3>K9 Patrol Units</h3>
                            <ul>
                                <li>Highly trained handler-dog teams</li>
                                <li>Enhanced detection capabilities</li>
                                <li>Powerful psychological deterrent</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tech-integration">
                <div className="container">
                    <div className="tech-content">
                        <h2 className="tech-title">Smart Patrol Technology</h2>
                        <p className="tech-description">Our romaing guards utilize advanced tools to enhance patrol efficiency:</p>
                        <div className="tech-features">
                            <div className="tech-item">
                                <div className="icon-circle">📱</div>
                                <p>Mobile reporting apps with photo documentation</p>
                            </div>
                            <div className="tech-item">
                                <div className="icon-circle">📍</div>
                                <p>GPS checkpoints to verify patrol completion</p>
                            </div>
                            <div className="tech-item">
                                <div className="icon-circle">📹</div>
                                <p>Body cameras for incident verification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-served">
                <h2>Industries That Trust Our Patrol Services</h2>
                <div className="industry-grid">
                    <div className="industry-item">
                        <span className="icon">🏢</span>
                        <h3>Residential Complexes</h3>
                        <p>Protect apartments, gated communities, and HOA neighborhoods with visible patrol presence.</p>
                    </div>
                    <div className="industry-item">
                        <span className="icon">🏗️</span>
                        <h3>Construction Sites</h3>
                        <p>Prevent theft and vandalism of tools, materials, and equipment through active site patrols.</p>
                    </div>
                    <div className="industry-item">
                        <span className="icon">🏭</span>
                        <h3>Industry Parks</h3>
                        <p>Secure large facilities and perimeters with reliable after-hours monitoring</p>
                    </div>
                </div>
            </section>
            
            <section className="roaming-cta">
                <div className="container">
                    <h2>Need Mobile Security Coverage?</h2>
                    <p>Our security experts will design a patrol plan tailored to your prpoerty's layout and risk factors</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contac'}
                    
                    >
                        Get a Custom Patrol Proposal
                    </button>
                </div>
            </section>
        </div>
    );
};

export default RoamingGuards;