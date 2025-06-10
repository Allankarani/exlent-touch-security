import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});
    }, []);
    const navigate = useNavigate();

    // Updated testimonials with actual client references from profile (Page 9)
    const clientPortfolio = [
        { name: "IBIS Hotel Nairobi", sector: "Hospitality" },
        { name: "Ruban Textile Isiolo", sector: "Manufacturing" },
        { name: "Samba Lodge Nanyuki", sector: "Tourism" },
        { name: "Meru Motor Spot", sector: "Automotive" },
        { name: "Isiolo Water Department", sector: "Government" },
        { name: "Legacy Apartments Meru", sector: "Real Estate" },
        { name: "Crystal Motors (K) Ltd", sector: "Automotive" },
        { name: "Pergamon Group", sector: "Technology" }
    ];
    const testimonials = [
        {
            quote:
                "Exlent Touch has provided unmatched security for our operations. We feel safer and more confident in our day-to-day business.",
            client: "Manager, IBIS Hotel Nairobi"    
        },
        {
            quote:
                "Their security systems are cutting-edge and reliable. Insallation was quick, and support has been fantastic.",
            client: "CEO, Crystal Motors (K) Ltd"     
        },
        {
            quote:
                "Our hotel has never been more secure. Exlent Touch's personnel are professional, punctual, and discreet.",
            client: "General Manager, Samba Lodge Nanyuki"    
        }
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

           <section className="company-overview" data-aos="fade-up">
            <div className="container">
                <h2 className="section-title" data-aos="fade-down">Our Security Expertise</h2>
                <p className="section-description" data-aos="fade" data-aos-delay="100">
                    Established as one of Kenya's leading security companies,
                    <strong>Exlent Touch Security Services Limited</strong>
                    provides integrated, risk-based security solutions.
                    Headquarted in Mwiki along kasarani Highway,
                    we operate nationwide with:
                </p>
                <ul className="strengths-list">
                    <li data-aos="zoom-in" data-aos-delay="200">
                        <span className="icon">🛡️</span>
                        <span>ISO 27001:2014 information security practices</span>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="300">
                        <span className="icon">📋</span>
                        <span>Public liability & workman's compensation insurance</span>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="400">
                        <span className="icon">👮‍♂️</span>
                        <span>100% vetted security personnel</span>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="500">
                        <span className="icon">📡</span>
                        <span>Advanced Hikvision CCTV technology</span>
                    </li>
                </ul>
            </div>
           </section>

           <section className="leadership-section">
            <div className="container">
                <h2>Security Leadership Team</h2>
                <div className="leadership-grid">
                    <div className="leader-card" data-aos="fade-up" data-aos-delay="100">
                        <h3>Samson Mwenda Kiunga</h3>
                        <p className="position">Managing Director</p>
                        <ul className="leader-qualification">
                            <li>10+ years security management experience</li>
                            <li>Business Admistration specialist</li>
                            <li>Security technology implementation expert</li>
                        </ul>
                    </div>
                    <div className="leader-card" data-aos="fade-up" data-aos-delay="200">
                        <h3>Dennis Kailikia</h3>
                        <p className="position">General Manager</p>
                        <ul className="leader-qualifications">
                            <li>15+ years security operations experience</li>
                            <li>Certified DISCO CCNA Expert</li>
                            <li>ICT security systems specialist</li>
                        </ul>
                    </div>
                </div>
            </div>
           </section>

            <section className="mission-vision">
<div className="container">
    <div className="mission-card" data-aos="fade-up">
      <h3>Our Mission</h3>
      <blockquote>
        We exist to deliver unmatched peace of mind through world-class security solutions:
      </blockquote>
      <ul className="mission-points">
        <li>Elite personnel recruitment with a strong ethical foundation</li>
        <li>Comprehensive and ongoing tactical training</li>
        <li>Community-first hiring approach</li>
        <li>Cutting-edge surveillance and monitoring tech</li>
      </ul>
    </div>

    <div className="operations-card" data-aos="fade-up">
      <h3>Operational Excellence</h3>
      <div className="operations-grid">
        <div className="operation-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="op-icon">🔍</div>
          <h4>Rigorous Screening</h4>
          <p>All guards must provide certificates of good conduct and credible references</p>
        </div>
        <div className="operation-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="op-icon">🎓</div>
          <h4>Continuous Training</h4>
          <p>Regualar drills in distater managementx, customer care, and VIP protection</p>
        </div>
        <div className="operation-item" data-aos="zoom-in" data-aos-delay="300">
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
                        <article
                          className="client-card"
                          key={index}
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                            <div className="client-sector">{client.sector}</div>
                            <h4>{client.name}</h4>
                        </article>    
                    ))}
                </div>
            </div>
           </section>

           <section className="testimonials">
            <div className="container">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-grid">
                    {testimonials.map((item, index) => (
                        <div
                         className="testimonial-card"
                         key={index}
                         data-aos="fade-up"
                         data-aos-delay={index * 150}
                        >
                            <p className="testimonial-quote">{item.quote}</p>
                            <h4 className="testimonial-client">- {item.client}</h4>
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