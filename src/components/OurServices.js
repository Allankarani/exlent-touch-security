import React from "react";
import './OurServices.css';
import {
  ShieldCheck, UserCheck, Car, Award, Video,
  Lock, Zap, Bell, GraduationCap, Search, Briefcase
} from 'lucide-react';

const services = [
  { title: 'Security Guarding', icon: <ShieldCheck className="text-red-600 w-6 h-6" /> },
  { title: 'Roaming Guards', icon: <UserCheck className="text-red-600 w-6 h-6" /> },
  { title: 'Car Park Guarding', icon: <Car className="text-red-600 w-6 h-6" /> },
  { title: 'VIP Protection', icon: <Award className="text-red-600 w-6 h-6" /> },
  { title: 'CCTV Installation', icon: <Video className="text-red-600 w-6 h-6" /> },
  { title: 'Access Control', icon: <Lock className="text-red-600 w-6 h-6" /> },
  { title: 'Electric Fence', icon: <Zap className="text-red-600 w-6 h-6" /> },
  { title: 'Alarm Monitoring', icon: <Bell className="text-red-600 w-6 h-6" /> },
  { title: 'Security Training', icon: <GraduationCap className="text-red-600 w-6 h-6" /> },
  { title: 'Security Audits', icon: <Search className="text-red-600 w-6 h-6" /> },
  { title: 'Investigations', icon: <Briefcase className="text-red-600 w-6 h-6" /> },
  { title: 'Retail Accreditation', icon: <Award className="text-red-600 w-6 h-6" /> },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-wrapper">
        <h2 className="services-title">Our Security Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              {service.icon}
              <span>{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

