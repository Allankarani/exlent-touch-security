import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeSecurity from "../pages/HomeSecurity";
import RetailSecurity from "../pages/RetailSecurity";
import CloseProtection from "../pages/CloseProtection";
import GuardDogs from "../pages/GuardDogs";

const Services = () => {
  return (
    <div>
      <h2>Our Security Services</h2>
      <nav>
        <ul>
          <li><Link to="home-security">Home Security</Link></li>
          <li><Link to="retail-security">Retail Security</Link></li>
          <li><Link to="close-protection">Close Protection</Link></li>
          <li><Link to="guard-dogs">Guard Dogs</Link></li>
        </ul>
      </nav>

      {/* Define Routes for Different Services */}
      <Routes>
        <Route path="home-security" element={<HomeSecurity />} />
        <Route path="retail-security" element={<RetailSecurity />} />
        <Route path="close-protection" element={<CloseProtection />} />
        <Route path="guard-dogs" element={<GuardDogs />} />
      </Routes>
    </div>
  );
};

export default Services;

