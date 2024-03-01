import React from "react";
import Navbar from "../../components/Navbar";
import "./Contactme.css";
function Contactme({handleClose}) {
  return (
    <div className="contactme-container">
      <div className="contactme-nav">
        <button className="logo">D</button>

        <div className="acc">
          <img height={20} src="./refresh.png" alt="refresh" />
          <img height={20} src="./close.png" alt="close"
          onClick={handleClose} />
        </div>

      </div>
        <img className="contactme-avatar" width={100} src="/avatarbg.png" alt="avatar image" />

<div className="form-wrap">
  
        <div className="contactme-text">
          Thank you for taking the time to get in touch. How may I be of
          assistance to you today?{" "}
        </div>

      <form className="contactme-form">
        <input className="contactme-input" type="text" placeholder="Name" />
        <input className="contactme-input" type="text" placeholder="Email" />
        
        <textarea className="contactme-textarea" placeholder="Message" cols="30" rows="10"></textarea>

        <button className="contactme-submit">Submit</button>
      </form>
</div>
    </div>
  );
}

export default Contactme;
