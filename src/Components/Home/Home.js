// src/Home.js
import React from "react";
import "./home.css"; // Import the CSS file
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom"; // For navigation links

function Home() {
  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/Welding 1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Website</h3>
            <p>Your journey starts here. Explore our services and offerings.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/welding 3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Precision Welding for Every Project</h3>
            <p>
              From custom metal fabrication to structural welding, we offer
              high-quality solutions for residential, commercial, and industrial
              needs. Let our experts handle your toughest welding challenges
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Assets/Welding 1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Expert Welding Services for Every Need</h3>
            <p>
              We provide a wide array of welding services, including MIG, TIG,
              and Stick welding, metal fabrication, repair, and custom design.
              Whether you need welding for industrial machinery, home
              renovations, or artistic metal projects, we have the expertise and
              tools to bring your vision to life
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
