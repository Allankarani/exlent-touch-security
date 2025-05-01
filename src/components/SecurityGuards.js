import React from "react";
import armedGuard from "../assets/images/armed-guard.jpg";
import patrolSecurity from "../assets/images/security-guard.jpg";
import eventSecurity from "../assets/images/event-security.jpg";

const SecurityGuards = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Security Guards</h1>
      <p className="text-center">
        Our highly trained security personnel ensure safety and peace of mind.
      </p>
      <div className="row">
        <div className="col-md-4">
          <img src={armedGuard} alt="Armed Guard" className="img-fluid rounded" />
          <h5>Armed Guards</h5>
        </div>
        <div className="col-md-4">
          <img src={patrolSecurity} alt="Patrol Team" className="img-fluid rounded" />
          <h5>Patrol Security</h5>
        </div>
        <div className="col-md-4">
          <img src={eventSecurity} alt="Event Security" className="img-fluid rounded" />
          <h5>Event Security</h5>
        </div>
      </div>
    </div>
  );
};

export default SecurityGuards;
