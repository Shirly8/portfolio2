import React, { useState } from 'react';
import './RBC.css';
import ai from '../../WorkAssets/ai.png'
import model from '../../WorkAssets/model.png'

const App: React.FC = () => {

  const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({
    display: 'none',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get image container dimensions
    const x = e.clientX - rect.left; // Mouse X position within the image
    const y = e.clientY - rect.top; // Mouse Y position within the image

    setMagnifierStyle({
      display: 'block',
      top: `${y}px`,
      left: `${x}px`,
      backgroundPosition: `-${x}px -${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: 'none' });
  };

  return (
    <div className="rbc-container">
      {/* Left Side */}
      <div className="rbc-left-side">
        <h1>RBC</h1>
        <h2>2024 - Core and Real-Time Payment AI Solution</h2>
        <p>
          Led the development of a high-performance AI-driven Natural Language
          Processing (NLP) solution to analyze transaction descriptions in RBC's payment system.
        </p>

        <h3>NLP: From POC to Production</h3>
        <p>
          Transitioned from proof of concept (POC) to production involved designing a business
          capability model and technical architecture that integrated Large Language Model
          (LLM), synthetic data generation, and NLP model. Data augmentation techniques enhanced
          the training dataset's robustness. Ensured seamless integration with RBC’s payment systems.
        </p>

        <h3>Model Optimization</h3>
        <p>
          Fine-tuned a binary multi-class NLP model to classify messages across six distinct
          categories of abuse. Utilized different model optimization, such as Optuna for Hyperparameter
          tuning and Elastic Weight Consolidation (EWC) to enhance stability. These efforts resulted
          in an impressive F1 score of 0.98 and an AUC of 0.95, effectively reducing misclassification
          rates by 91%.
        </p>

        {/* Technologies Box */}
        <div className="rbc-tech-box">
          <div className="rbc-text">
            <h3>Technologies</h3>
            <p style = {{fontWeight: "bolder"}}>
              <li>PyTorch</li> 
              <li>SciKit-Learn</li> 
              <li>Transformers</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>spaCy</li></p>
          </div>
          <img src={ai} alt="Technology illustration" />
        </div>
      </div>

      {/* Right Side */}
      <div className="rbc-right-side">
        <div
          className="rbc-image-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={model}
            alt="AI Payment Solution"
          />
          <div className="rbc-magnifier" style={magnifierStyle}>
            <img
              src={model}
              alt="AI Payment Solution"
              style={{
                position: 'absolute',
                left: `-${magnifierStyle.left}`,
                top: `-${magnifierStyle.top}`,
                transform: 'scale(2)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
