import React from 'react';
import './skills.css';
import PYTHON from '../../assets/python.svg';
import FLUTTER from '../../assets/flutter.svg';
import FIGMA from '../../assets/figma.svg';
import JAVA from '../../assets/java.svg';
import NLP from '../../assets/nlp.svg';
import TENSORFLOW from '../../assets/TensorFlow.svg';
import DART from '../../assets/dart.svg';
import COMPUTER_VISION from '../../assets/computer_vision.svg';
import DATA_SCIENCE from '../../assets/data_science.svg';

const SkillsData = [
  { id: 1, image: PYTHON, title: 'Python', disc: 'Programming Language' },
  { id: 2, image: JAVA, title: 'Java', disc: 'Programming Language' },
  { id: 3, image: DART, title: 'Dart', disc: 'Programming Language' },
  { id: 4, image: FLUTTER, title: 'Flutter', disc: 'Cross-platform Framework' },
  { id: 5, image: NLP, title: 'NLP', disc: 'Natural Language Processing' },
  { id: 6, image: COMPUTER_VISION, title: 'Computer Vision', disc: 'AI & Image Processing & Neural Network' },
  { id: 7, image: TENSORFLOW, title: 'TensorFlow', disc: 'Machine Learning Framework & Neural Network' },
  { id: 8, image: DATA_SCIENCE, title: 'Data Science', disc: 'Analytics & Insights' },
  { id: 9, image: FIGMA, title: 'Figma', disc: 'Design Tool' },
];

function Skills() {
  return (
    <section className='skills' id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
