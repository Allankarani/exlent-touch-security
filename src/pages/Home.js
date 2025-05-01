import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
    return (
        <div>
        <main className="home">
            <section className="hero">
                <h1>Welcome to Exlent Touch Security</h1>
                <p>Protecting what matters most to you</p>
                <button oneClick={() => window.location.href = '/contact'}>Get a Free Quote</button>
            </section>
            <section className="about-section">
                <h2>Who We Are</h2>
                <p>
                    Exlent touch is a leading security company dedicated to providing top-notch security
                    solutions for business and individuals.
                    With years of experience we have built a reputation fpr reliability, professionalism and 
                    excellence in the security industry. 
                </p>
            </section>

            <section className="services-section">
                <h2>What We Do</h2>
                <p>
                    We offer a wide range of security services tailored to meet your unique needs. Our services
                    Include:
                </p>
                <ul>
                    <li>Physical Security(Guards, Surveillance, Access Control)</li>
                    <li>Alarm Systems and Monitoring</li>
                    <li>Risk Assessment and Consulting</li>
                </ul>
            </section>

            <section className="why-choose-use">
                <h2>Why Choose Exlent Touch?</h2>
                <p>
                    Here's why we stand out:
                </p>
                <ul>
                    <li><strong>Experienced Professionals</strong>: Our team is highly trained and certified</li>
                    <li><strong>Cutting-Edge Technology</strong>: We use the latest security technology to keep you safe</li>
                    <li><strong>24/7 Support</strong>: We're always here when you need us.</li>
                    <li><strong>Custom Solutions</strong>: We tailor our services to fit your specific needs</li>
                </ul>
            </section>

            <section className="cta-section">
                <h2>Ready to Secure Your Future? </h2>
                <p>
                    Contact us today to learn about our services or to request for consultation
                </p>
                <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
            </section>


            </main>    
        </div>
    );
};

export default Home;