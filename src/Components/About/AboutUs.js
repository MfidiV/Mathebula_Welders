// src/AboutUs.js
import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

function AboutUs() {
  return (
    <div className="about-us">
      {/* Header Section */}
      <div className="about-us-header">
        <h1>About Precision Welders Inc.</h1>
        <p>Your trusted partner for precision welding and metalwork</p>
      </div>

      {/* About Us Content */}
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Who We Are</h2>
          <p>
            At <strong>Precision Welders Inc.</strong>, we are committed to
            delivering top-quality welding services with precision and
            craftsmanship. With over 20 years of experience in the industry, our
            team specializes in <strong>TIG, MIG, Stick welding</strong>, and
            custom metal fabrication. We work with a variety of materials,
            including steel, aluminum, and stainless steel, to meet the diverse
            needs of our residential, commercial, and industrial clients.
          </p>
          <p>
            Whether it’s a custom project or a large-scale welding job, we pride
            ourselves on delivering durable, precise, and aesthetically pleasing
            results that exceed expectations. Our dedication to safety, quality,
            and customer satisfaction has earned us a reputation as a leading
            provider of welding services.
          </p>
        </div>

        <div className="about-us-video">
          <h3>See Us in Action</h3>
          <div className="video-container">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/gEyupnSmA7g"
              title="Welding Process Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="about-us-services">
        <h2>Our Welding Services</h2>
        <div className="services">
          <div className="service-card">
            <img src="/Assets/Services/Tig.png" alt="TIG Welding" />
            <h3>TIG Welding</h3>
            <p>
              Precision welding with clean and strong results for thin
              materials.
            </p>
          </div>
          <div className="service-card">
            <img src="/Assets/Services/Mig.png" alt="MIG Welding" />
            <h3>MIG Welding</h3>
            <p>
              Efficient and versatile welding for a wide range of applications.
            </p>
          </div>
          <div className="service-card">
            <img src="/Assets/Services/Custom.png" alt="Custom Metal Work" />
            <h3>Custom Metal Fabrication</h3>
            <p>Tailored metalwork for unique and challenging projects.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Precision Welders Inc. went above and beyond with our custom
              metal work. Their attention to detail and craftsmanship was
              outstanding!"
            </p>
            <h4>- John D., Business Owner</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The team did an incredible job on our steel structure. Fast,
              reliable, and professional. I wouldn't trust anyone else for
              welding projects."
            </p>
            <h4>- Sarah W., Architect</h4>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Contact us today to get a free quote or learn more about how we can
          bring your vision to life.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
}

export default AboutUs;
