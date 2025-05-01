import React from "react";

const RetailSecurity = () => {
  return (
    <div>
        <main className="retail-security">
    <section className="hero">
      <h1>Retail Security</h1>
      <p>We provide professional retail security services to prevent theft and ensure safety.</p>
    </section>

    <section className="introductio">
        <h2>Why Retail Security matters</h2>
        <p>
            Retail businesses face unique security challenges, including shoplifting, employee 
            theft , and organized retail crime.
            At exlent Touch we provide tailored security solutions to safeeguard your assests
            employees and customers
        </p>

    </section>

    <section className="services">
        <h2>Our Retail Security Services</h2>
        <div className="service-list">
            <div className="service-item">
                <h3>On-Site Security Guards</h3>
                <p>
                    Highly trained security personnel to monitor your premises, deter theft, and respond to incidents
                </p>

            </div>
            <div className="service-item">
                <h3>CCTV Survillance</h3>
                <p>
                    State-of-the art survillance systems to monitor your store in real-time and provide evidence in case
                    of incidents
                </p>

            </div>
            <div className="service-item">
                <h3>Loss Prevention Strategies</h3>
                <p>
                    Customized strategies to reduce shrinkage and prevent theft, including employee training 
                    and inventory control.
                </p>
            </div>
            <div className="service-item">
                <h3>Access Control Systems</h3>
                <p>
                    Advanced access control solutions to restrict unauthorized entry to sensitive areas.
                </p>

            </div>

        </div>

    </section>

    <section className="why-choose-us">
        <h2>Why Choose Exlent Touch for Retail Security?</h2>
        <ul>
            <li><strong>Industry Expertise</strong>: Years of experience securing retail environments</li>
            <li><strong>Custom Solutions</strong>: Tailored security plans to meet your specific needs</li>
            <li><strong>24/7 Support</strong>: Round-the-clock monitoring and rapid response</li>
            <li><strong>Proven Results</strong>: A track record of reducing theft and improving safety</li>
        </ul>

    </section>

    <section className="cta-section">
        <h2>Secure Your retail Business Today</h2>
        <p>
            Contact us to learn more about our retail security solutions and how we can protect your business
        </p>
        <button onClick={() => window.location.href = '/contact'}>Contact Us</button>

    </section>
    </main>
    </div>



  );
};

export default RetailSecurity;
