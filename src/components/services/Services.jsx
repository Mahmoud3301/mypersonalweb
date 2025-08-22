import React from "react";
import './services.css';

import { FaCode, FaBug, FaBrain, FaUsers } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { SiTensorflow } from "react-icons/si";

function Services() {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Skills & Services</h2>
      </div>

      <div className="container container_services">
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Coding</h3>
          <p className="text-light">
            Writing efficient and optimized code with focus on speed and performance.
          </p>
        </article>

        <article className="card">
          <FaBug className="icon" />
          <h3>Good Deal with Errors</h3>
          <p className="text-light">
            Strong debugging skills and ability to solve complex issues quickly.
          </p>
        </article>

        <article className="card">
          <SiTensorflow className="icon" />
          <h3>Good Deal with Models</h3>
          <p className="text-light">
            Experience in training, fine-tuning, and deploying AI/ML models.
          </p>
        </article>

        <article className="card">
          <FaBrain className="icon" />
          <h3>Problem Solving</h3>
          <p className="text-light">
            Logical and analytical thinking to design smart and effective solutions.
          </p>
        </article>

        <article className="card">
          <FaUsers className="icon" />
          <h3>Teamwork</h3>
          <p className="text-light">
            Collaborative mindset and ability to work effectively in a team.
          </p>
        </article>

        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className="text-light">
            Writing readable, maintainable, and scalable code following best practices.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
