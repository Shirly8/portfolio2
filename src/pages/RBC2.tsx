import React, { useState } from 'react';
import './RBC.css';
import sharepoint from  '../../WorkAssets/sharepoint.png'
import shift from '../../WorkAssets/shift.png'

const App: React.FC = () => {

  const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({
    display: 'none',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect(); 
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

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
        <h2>2023 - Workforce management (WFM) SHAREPOINT</h2>
        <p>
        The development of RBC’s WFM SharePoint for call centres, a versatile platform was pivotal in addressing business and operational needs, 
        providing a solution that could centralize and streamline WFM processes and allow easy integration with other Microsoft tools.
        </p>

        <div className = "image">
          <img src = {shift}
          style = {{
            width: "100%",
            padding: "7%"
            }}></img>
        </div>

        <h3>Solution for Call Centres</h3>
        <p>
        Leveraging Microsoft frameworks like SPFx, ASP.NET, along with programming languages such as  Node.js (Javascript), 
        Fabric Web UI Kit and REST APIs, I developed key solutions such as Team Announcement Platform, 
        Automated Flex Rotational Calendar, Shift Scheduler, 
        Adherence Monitor and a workforce system migration application [Tableau to Verint]. 
        These implementations and automation helped streamlined operational efficiency by 93%, 
        optimizing task completion from 3 days to 2 hours!
        </p>

      
      </div>

      {/* Right Side */}
      <div className="rbc-right-side">
        <div
          className="rbc-image-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style = {{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            src={sharepoint}
            alt="AI Payment Solution"
            style = {{
              width: '70%',
            }}
          />
          <div className="rbc-magnifier" style={magnifierStyle}>
            <img
              src={sharepoint}
              alt="AI Payment Solution"
              style={{
                position: 'absolute',
                left: `-${magnifierStyle.left}`,
                top: `-${magnifierStyle.top}`,
                transform: 'scale(0.8)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
