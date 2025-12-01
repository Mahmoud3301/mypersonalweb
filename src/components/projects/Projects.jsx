import React from 'react'
import './projects.css'
import IMG1 from '../../assets/x_o.png'
import IMG2 from '../../assets/lane.jpeg'
import IMG3 from '../../assets/seg.png'
import IMG4 from '../../assets/object.jpeg'
import IMG5 from '../../assets/sign.jpeg'
import IMG6 from '../../assets/traffic.jpeg'
import IMG7 from '../../assets/travel.png'
import IMG8 from '../../assets/emotion.png'
import IMG9 from '../../assets/car_plate.jpg'
import IMG10 from '../../assets/filters.png'
import IMG11 from '../../assets/parking.png'
import IMG12 from '../../assets/bitcoin.png'

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'X-O Game (Tic Tac Toe)',
    github: 'https://github.com/Mahmoud3301/X_O_Flutter'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lane Detection System',
    github: 'https://github.com/Mahmoud3301/Object_lane_detection'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Segmentation',
    github: 'https://github.com/Mahmoud3301/segmentation'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Object Detection',
    github: 'https://github.com/Mahmoud3301/Object_lane_detection'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sign Recognition',
    github: 'https://github.com/Mahmoud3301/Sign_recognition'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Traffic Light Detection',
    github: 'https://github.com/Mahmoud3301/traffic_light/tree/main'
  },
  {
    id: 7,
    image: IMG7,
    title: 'TravelPlanner Chatbot',
    github: 'https://github.com/Mahmoud3301/Travel_Planner_chatbot'
  },
  {
    id: 8,
    image: IMG8,
    title: 'EmpathyBot',
    github: 'https://github.com/Mahmoud3301/empathybot-Mahmoud'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Car Plate speed open ai',
    github: 'https://github.com/Mahmoud3301/Car_Plate_speed_detection_open_ai'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Image Filters',
    github: 'https://github.com/Mahmoud3301/Image_Filters'
  },
  {
    id: 11,
    image: IMG11,
    title: 'Car Parking',
    github: 'https://github.com/Mahmoud3301/Car_Parking'
  },
  {
    id: 12,
    image: IMG12,
    title: 'Bitcoin Prediction',
    github: 'https://github.com/Mahmoud3301/Bitcoin_prediction'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>

      <div className="container projects_container">
        {portfolioData.map(({ id, image, title, github }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>

            <div className="portfolio_item_btns">
              <a href={github} target="_blank" rel="noreferrer" className="btn">
                Github
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects
