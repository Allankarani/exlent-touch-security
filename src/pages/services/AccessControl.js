import React from 'react';
import { FaIdCard, FaFingerprint, FaMobileAlt, FaTachometerAlt } from 'react-icons/fa';
import './AccessControl.css';
const AccessControl = () => {
    return (
        <div className="access-control-page">
            <section className="access-hero">
                <div className="hero-content">
                    <h1>Advanced Access Control Systems</h1>
                    <p>Secure your premises with intelligent entry management solutions</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contacts'}
                    
                    >
                        Get a System Demo

                    </button>
                </div>
            </section>

            <section className="benefits-banner">
                <div className="benefit-item">
                    <span className="benefit-icon">🔒</span>
                    <span>Unauthorized Entry Prevention</span>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">📊</span>
                    <span>Real-Time Access Logs</span>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">🔄</span>
                    <span>Remote Access Managament</span>
                </div>
            </section>

            {/* System Types */}
            <section className="system-types access-control">
                <div className="container">
                    <h2 className="section-heading">Our Access Control Solutions</h2>
                    <div className="system-grid">
                        <div className="system-card">
                            <FaIdCard className="system-icon" />
                            <h3>Card & Key Fob Systems</h3>
                            <ul>
                                <li>RFID/NFC technology</li>
                                <li>Employee badge integration</li>
                                <li>Lost card deactivation</li>
                                <li>Time-based access rules</li>
                            </ul>
                        </div>
                        <div className="system-card">
                            <FaFingerprint className="system-icon" />
                            <h3>Biometric Systems</h3>
                            <ul>
                                <li>Fingerprint recognition</li>
                                <li>Facial recognition</li>
                                <li>Iris scanning</li>
                                <li>Multi-factor authentication</li>
                            </ul>
                        </div>
                        <div className="system-card">
                            <FaMobileAlt className="system-icon" />
                            <h3>Module Access Systems</h3>
                            <ul>
                                <li>Smartphone-enabled entry</li>
                                <li>Bluetooth/NFC connectivity</li>
                                <li>Temporary access credentials</li>
                                <li>Visitor managament integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Features*/}

            <section className="integration-features">
                <div className="container">
                    <h2>Smart Integration Capabilties</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🎥</div>
                            <h3>CCTV Syncing</h3>
                            <p>Automated camera activation on door access</p>
                        </div>
                        <div className="feature-card">
                            <div classname="feature-icon">🚨</div>
                            <h3>Alarm Linking</h3>
                            <p>Trigger alerts on forced entry attempts</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🏢</div>
                            <h3>HR Systems API</h3>
                            <p>Automate employee onboarding/offboarding</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Installation process */}

            <section className="installation-process">
                <div className="container">
                    <h2>Professional Installation Process</h2>
                    <div className="process-steps">
                        <div className="process-card">
                            <div className="step-number">1</div>
                            <h3>Security Audit</h3>
                            <p>Identify vulnerable entry points</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">2</div>
                            <h3>System Design</h3>
                            <p>Customized access hierarchy planning</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">3</div>
                            <h3>Hardware Installation</h3>
                            <p>Reader, controller, and lock setup</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">4</div>
                            <h3>Software Configuration</h3>
                            <p>User permissions and system testing</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Management Dashboard */}
            <section className="dashboard-section">
                <div className="container">
                    <div className="dashboard-card">
                        <FaTachometerAlt className="dashboard-icon" />
                        <h2>Centralized Management Dashboard</h2>
                        <ul className="dashbaord-features">
                            <li>Real-time access monitoring</li>
                            <li>Customizable reports and alerts</li>
                            <li>Multi-site management</li>
                            <li>Emergency lockdown capability</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*CTA Section */}
            <section className="access-cta">
                <div className="container">
                    <h2>Take Control of Your Security</h2>
                    <p>Our experts will design a tailored access control solution for your facility.</p>
                    <button
                     className="cta-button"
                     OnClick={() => window.location.href = '/contact'}
                    
                    >
                        Request a Consultation

                    </button>
                </div>
            </section>
        </div>
    );
};

export default AccessControl;