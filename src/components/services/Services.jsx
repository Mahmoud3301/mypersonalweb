import React from "react";
import './services.css';

import { FaCode, FaBug, FaBrain, FaUsers, FaEye, FaLanguage, FaPaintBrush, FaHandshake, FaSmile, FaCogs, FaLightbulb } from "react-icons/fa";
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

        {/* New Added Services */}
        <article className="card">
          <FaEye className="icon" />
          <h3>Computer Vision Projects</h3>
          <p className="text-light">
            Building and deploying image classification, detection, and segmentation solutions.
          </p>
        </article>

        <article className="card">
          <FaLanguage className="icon" />
          <h3>NLP Projects</h3>
          <p className="text-light">
            Creating text processing, translation, summarization, and chatbot systems.
          </p>
        </article>

        <article className="card">
          <FaPaintBrush className="icon" />
          <h3>UI/UX Projects</h3>
          <p className="text-light">
            Designing modern, user-friendly interfaces with a focus on usability and experience.
          </p>
        </article>
      </div>

      {/* New Section: What I Provide to Clients */}
      <div className="top_section" style={{ marginTop: "3rem" }}>
        <h5>What I Provide to Clients</h5>
        <h2>Value for Clients</h2>
      </div>

      <div className="container container_services">
        <article className="card">
          <FaHandshake className="icon" />
          <h3>High Quality</h3>
          <p className="text-light">
            Delivering high-quality work that meets client expectations and goals.
          </p>
        </article>

        <article className="card">
          <FaHandshake className="icon" />
          <h3>On Time Delivery</h3>
          <p className="text-light">
            Ensuring timely delivery of projects without compromising on quality.
          </p>
        </article>

        <article className="card">
          <FaHandshake className="icon" />
          <h3>Continuous Support</h3>
          <p className="text-light">
            Providing ongoing support and maintenance even after project delivery.
          </p>
        </article>

        <article className="card">
          <FaCogs className="icon" />
          <h3>Customized Solutions</h3>
          <p className="text-light">
            Tailoring solutions to fit the unique needs and requirements of each client.
          </p>
        </article>

        <article className="card">
          <FaSmile className="icon" />
          <h3>Client Satisfaction</h3>
          <p className="text-light">
            Prioritizing client happiness by delivering results that exceed expectations.
          </p>
        </article>

        <article className="card">
          <FaLightbulb className="icon" />
          <h3>Innovation & Creativity</h3>
          <p className="text-light">
            Bringing fresh ideas and creative solutions to make projects stand out.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;
