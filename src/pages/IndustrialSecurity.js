import React from 'react'

const IndustrialSecurity = () => {
    return (
        <div>
            <main className="industrial-security">
                <section className="hero">
                    <h1>Industrial Security Solutions</h1>
                    <p>Protecting your industrila assets, employees and operations with advanced
                        securtiy measures.
                    </p>
                    <button onClick={() => window.location.href = '/contact'}>Get a Free Consultation

                    </button>

                </section>

                <section className="introduction">
                    <h2>Why industrial Security Matters</h2>
                    <p>
                        Industrial faciltities such as factories warehouses and construction sites face unique security challenges,
                        Including theft, vandalism and unauthorized access. At Exlent Touch  we provide tailored security solutions
                        to safeguard your assests , ensure employee safety and maintain uinterrupted operations.
                    </p>

                </section>

                <section className="services">
                    <h2>Our Industrial Security Services</h2>
                    <div className="service-list">
                        <div className="service-item">
                            <h3>Perimeter Security</h3>
                            <p>
                                Advanced fencing, surveillance and access control systems to secure the boundaries of your facility
                            </p>

                        </div>
                        <div className="service-item">
                            <h3>CCTV Surveillance</h3>
                            <p>
                                State-of-the art cameras and monitoring systems to provide real-time visibility of your facility
                            </p>

                        </div>
                        <div className="service-item">
                            <p>
                                Advanced systems to manage entry to restricted areas and ensure only authorized personnel have access.
                            </p>

                        </div>
                        <div className="service-item">
                            <h3>Emergency Response</h3>
                            <p>
                                Rapid response teams to handle security breaches, fires or other emergencies
                            </p>

                        </div>

                    </div>


                </section>
                <section className="why-choose-us">
                    <h2>Why Choose Exlent Touch for Industrial Security?</h2>
                    <ul>
                        <li><strong>Industry Expertise</strong>:Years of experience securing industrial facilities</li>
                        <li><strong>Custom Solutions</strong>: Tailored security plans to meet your specific needs.</li>
                        <li><strong>24/7 Monitoring</strong>: Round-the-clock surveillance and rapid response</li>
                        <li><strong>Proven Results</strong>: A track record of reducing theft and improving safety in industrial environments</li>
                    </ul>

                </section>

                <section className="cta-section">
                    <h2>Secure Your Industrial Facility Today</h2>
                    <p>
                        Contact us to learn more about our industrial security solutions and how we can protect your business.
                    </p>
                    <button onClick={() => window.location.href = '/contact'}>Contact Us</button>

                </section>
            </main>
        </div>
    );
};

export default IndustrialSecurity;