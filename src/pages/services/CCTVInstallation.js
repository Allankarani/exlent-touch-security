import React from 'react';
import { FaVideo, FaNetworkWired, FaMicrochip } from 'react-icons/fa';
import { FaDoorOpen, FaBell, FaHome, FaServer } from 'react-icons/fa';
import './CCTVInstallation.css';
const CCTVInstallation = () => {
    return (
        <div className="cctv-page">
            <section className="cctv-hero">
                <div className="hero-content">
                    <h1>Professional CCTV Installation Services</h1>
                    <p className="subtitle">
                        Cutting-edge surveillance systems tailored to your security needs
                    </p>
                    <p className="trust-note">
                        Trusted by 100+ homes and businesses across kenya
                    </p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contacts'}
                    
                    >
                        Get a Free Site Survey

                    </button>
                </div>
            </section>

            <section className="stats-banner">
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Monitoring Capability</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">4K</span>
                    <span className="stat-label">Ultra HD Resolution</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Camera Brands Supported</span>
                </div>
            </section>
            <section className="system-types">
                <div className="container">
                    <h2>Our CCTV System Solutions</h2>
                    <div className="system-grid">
                        <div className="system-card">
                            <FaVideo className="system-icon" />
                            <h3>Analog HD Systems</h3>
                            <ul>
                                <li>Cost-effective upgrades from legacy systems</li>
                                <li>Up to 8MP resolution</li>
                                <li>Compatible with existing coaxial cables</li>
                                <li>Ideal for small business</li>
                            </ul>
                        </div>
                        <div className="system-card">
                            <FaNetworkWired className="system-icon" />
                            <h3>IP Network Systems</h3>
                            <ul>
                                <li>4K ultra HD resolution</li>
                                <li>Poer over Ethernet enabled</li>
                                <li>Advanced analytics capabilities</li>
                                <li>Enterprise-grade security</li>
                            </ul>
                        </div>
                        <div className="system-card">
                            <FaMicrochip className="system-icon" />
                            <h3>Wireless & AI Systems</h3>
                            <ul>
                                <li>Wire-free installation options</li>
                                <li>Facial recognition technology</li>
                                <li>Object detection algorithms</li>
                                <li>Smart home integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="installation-process">
                <div className="container">
                    <h2>Our professional Installation Approach</h2>
                    <div className="process-steps">
                        <div className="process-card">
                            <div className="step-number">1</div>
                            <h3>Site Assessment</h3>
                            <p>Security evaluation and camera placement planning</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">2</div>
                            <h3>System Design</h3>
                            <p>Customized camera selection and configuration</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">3</div>
                            <h3>Professional Installation</h3>
                            <p>Neat cabling and optimal mounting</p>
                        </div>
                        <div className="process-card">
                            <div className="step-number">4</div>
                            <h3>Training & Handover</h3>
                            <p>Client education on system operation</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="camera-features">
                <div className="container">
                    <h2>Advanced Camera Technologies</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🌙</div>
                            <h3>Night Vision</h3>
                            <p>Infrared illumination up to 100ft</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌧️</div>
                            <h3>Weatherproof</h3>
                            <p>IP66/67 rated for outdoor use</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔊</div>
                            <h3>Audio Recording</h3>
                            <p>Two-way audio capabilities</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3>Pan-Tilt-zoom</h3>
                            <p>Remote controlled viewing</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="integration">
                <div className="container">
                    <div className="integration-content">
                        <h2 className="section-heading">Seamless Security Integration</h2>
                        <p className="integration-subtext">
                            our systems work flawlessly with your existing security infrastructure:
                        </p>
                        <div className="integration-grid">
                            <div className="integration-item">
                                <FaDoorOpen className="integration-icon" />
                                <p>Access Control Systems</p>
                            </div>
                            <div className="integration-item">
                                <FaBell className="integration-icon" />
                                <p>Intrusion Alarms</p>
                            </div>
                            <div className="integration-item">
                                <FaHome className="integration-icon" />
                                <p>Smart Home Devices</p>
                            </div>
                            <div className="integration-item">
                                <FaServer className="integration-icon" />
                                <p>Central Monitoring Stations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cctv-cta">
                <div className="container">
                    <h2>Ready to Secure Your Propert?</h2>
                    <p>Get a free consultation with our CCTV specialists today</p>
                    <button
                     className="cta-button"
                     onClick={() => window.location.href = '/contact'}
                    
                    >
                        Request Your Quote
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CCTVInstallation;