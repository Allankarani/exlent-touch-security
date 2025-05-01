import React from 'react';
import './SecurityAudit.css';
const SecurityAudit = () => {
    return (
        <div className="security-audit-page">
            <section className="audit-hero">
                <div className="hero-content">
                    <h1>Professional Security Audits & Risk Assessments</h1>
                    <p>Identify vulnerabilties before they become security breaches</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contact'}
                    
                    >
                        Schedule Your Audit
                    </button>
                </div>
            </section>

            <section className="stats-banner">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <span className="stat-number">83%</span>
                            <span className="stat-desc">Of business find critical vulnerabilties during their first audit</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">ISO 27001</span>
                            <span className="stat-desc">Compliant assessment methodology</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="audit-types">
                <div className="container">
                    <h2>Our Security Audit Services</h2>
                    <div className="audit-grid">
                        <div className="audit-card">
                            <h3>Physical Security Audit</h3>
                            <ul>
                                <li>Perimeter vulnerability assessment</li>
                                <li>Access control evaluation</li>
                                <li>Surveillance system review</li>
                                <li>Security personnel protocols</li>
                            </ul>
                        </div>
                        <div className="audit-card">
                            <h3>Compliance Audit</h3>
                            <ul>
                                <li>GDPR/CCPA readiness</li>
                                <li>Industry-specific regualtions</li>
                                <li>Insurance requirement verification</li>
                                <li>Security policy alignment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="audit process">
                <div className="container">
                    <h2>Our 5-phase Audit Methodology</h2>
                    <div className="process-timeline">
                        <div className="phase">
                            <div className="phase-number">1</div>
                            <div className="phase-content">
                                <h3>Planning & Scoping</h3>
                                <p>Define audit objectives, boundaries and success metrics</p>
                            </div>
                        </div>
                        <div className="phase">
                            <div className="phase-number">2</div>
                            <div className="phase-content">
                                <h3>Data Collection</h3>
                                <p>On-site inspections, system scans and documentation review</p>
                            </div>
                        </div>
                        <div className="phase">
                            <div className="phase-number">3</div>
                            <div className="phase-content">
                                <h3>Vulnerability Analysis</h3>
                                <p>Identify security gaps using industry benchmarks</p>
                            </div>
                        </div>
                        <div className="phase">
                            <div className="phase-number">4</div>
                            <div className="phase-content">
                                <h3>Risk Assessment</h3>
                                <p>Prioritize threats based on likelihood and impact</p>
                            </div>
                        </div>
                        <div className="phase">
                            <div className="phase-number">5</div>
                            <div className="phase-content">
                                <h3>Reporting & Recommendations</h3>
                                <p>Detailed remediation plan with cost/benefit analysis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Deliverables */}

            <section className="deliverables">
                <div className="container">
                    <h2>Comprehensive Audit Deliverables</h2>
                    <div className="deliverables-grid">
                        <div className="deliverable-card">
                            <div className="deliverable-icon">📄</div>
                            <h3>Executive Summary</h3>
                            <p>High-level findings for leadership</p>
                        </div>
                        <div className="deliverable-card">
                            <div className="deliverable-icon">🔍</div>
                            <h3>Technical Report</h3>
                            <p>Detailed vulnerability</p>
                        </div>
                        <div className="deliverable-card">
                            <div className="deliverable-icon">📊</div>
                            <h3>Risk Matrix</h3>
                            <p>Visual threat prioritization</p>
                        </div>
                        <div className="deliverable-card">
                            <div className="deliverable-icon">🛠️</div>
                            <h3>Remediation plan</h3>
                            <p>Step-by-step improvement roadmap</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Industries Served */}

            <section className="industries-served">
                <div className="container">
                    <h2>Industry-Specific Audit Experience</h2>
                    <div className="industry-tags">
                        <span className="tag">Healthcare</span>
                        <span className="tag">Financial Services</span>
                        <span className="tag">Retail</span>
                        <span className="tag">Manufacturing</span>
                        <span className="tag">Education</span>
                        <span className="tag">Government</span>
                        <span className="tag">Hospitality</span>
                        <span className="tag">Critical Infrastructure</span>
                    </div>
                </div>
            </section>

            <section className="audit-cta">
                <div className="container">
                    <h2>Don't wait for a Breach to Discover Weakness</h2>
                    <p>Our certified auditors will provide actionable insights to strengthen your security posture</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contact'}
                    
                    >
                        Request Audit Proposal

                    </button>
                </div>
            </section>
        </div>
    );
};

export default SecurityAudit;