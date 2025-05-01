import React from 'react';
import { ShieldCheck, Clock, Users, BadgeCheck } from 'lucide-react';
import './WhyPartner.css';

const features = [
  {
    icon: <ShieldCheck className="feature-icon" />,
    title: 'Trusted Expertise',
    description: 'Over 15 years of hands-on security industry experience.',
  },
  {
    icon: <Clock className="feature-icon" />,
    title: '24/7 Protection',
    description: 'Always-on monitoring and rapid emergency response.',
  },
  {
    icon: <Users className="feature-icon" />,
    title: 'Community Focused',
    description: 'We recruit and empower local talent for all operations.',
  },
  {
    icon: <BadgeCheck className="feature-icon" />,
    title: 'Certified & Insured',
    description: 'Fully insured with ISO and PSA-certified processes.',
  },
];

const WhyPartner = () => {
  return (
    <section className="why-partner-section">
      <div className="content-container">
        <h2 className="section-heading">Why Partner with Exlent Touch Security?</h2>
        <p className="section-description">
          When it comes to protecting what matters most, you deserve a security partner that's reliable, responsive, and rooted in excellence.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div>{feature.icon}</div>
              <div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;