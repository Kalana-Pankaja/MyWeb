import React from 'react';
import '../styles/Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile-image">
        <img src="public\profile.jpg" alt="Kalana Liyanage" />
      </div>
      <div className="profile-content">
        <h2>About Me</h2>
        <p>
          I'm Kalana Liyanage, an engineering undergraduate focusing on Computer Science & Engineering.
          Passionate about software development and turning innovative ideas into reality. My interests span
          across web development, Solving Problems, Coding , and mobile app development.
        </p>
        <p>
          I'm excited to pursue research opportunities and continue growing professionally.
        </p>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:kalanap.23@cse.mrt.ac.lk">kalanap.23@cse.mrt.ac.lk</a></p>
          <p><i className="fas fa-phone"></i> Phone: +94 717524388</p>
          <p><i className="fas fa-map-marker-alt"></i> Location: Galle, Sri Lanka</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;