import React from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: rightSideRef, inView: rightSideInView } = useInView({ triggerOnce: true });

  
  return (
    <div className="About-container">
      {/* Left Side */}
      <div className="left-side">
        <img src="your-image-src.jpg" alt="Profile" className="profile-image" />
        <h1
          ref={aboutRef}
          className={`rotated-text ${aboutInView ? "animate" : ""}`}
        >
          About
        </h1>
      </div>

      {/* Right Side */}
      <div
        ref={rightSideRef}
        className={`right-side ${rightSideInView ? "animate" : ""}`}
      >
        <h2>Product-Oriented Developer By Heart</h2>
        <p>
          <strong>Driven to Build, Optimize, and Lead Innovative Solutions</strong>
          <br />
          Endorsed by my past employer as a highly creative individual who would go beyond the capabilities of what was offered, I am incredibly passionate about building something from the ground up or identifying opportunities for improvement and fulfilling them.
        </p>
        <p>
          I aim to explore beyond my capabilities and challenge myself in technical areas and UI design. My ultimate career aspiration is to take on leadership and management roles.
        </p>

        <div className="boxes">
          <div className="box">
            <h3>Programming</h3>
            <p>
              JavaScript, TypeScript, Python, SQL, MongoDB, C, C++, Java, Node.js,
              Express.js, Angular, React, HTML, CSS, SPFx, ASP.NET
            </p>
          </div>
          <div className="box">
            <h3>Business</h3>
            <p>Project Management, Agile Development, Strategic Planning</p>
          </div>
          <div className="box">
            <h3>Digital</h3>
            <p>Adobe Photoshop, Figma, Google Analytics, SEMRush, Shopify, WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
