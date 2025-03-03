import './Home.css'
import gif from '/HomeAssets/Project.gif'
import mail from '/HomeAssets/mail.png'
import linkedin from '/HomeAssets/linkedin.png'
import git from '/HomeAssets/git.png'
import headshot from '/HomeAssets/headshot.png'
import { useState } from "react";
import send from '/HomeAssets/send.png';
import headshot2 from '/HomeAssets/headshot2.png'
import Timeline from '../components/TimelineSlider'
import intuitLogo from '/HomeAssets/intuit.png';
import FunFact from '../pages/FunFacts';
import intuit from '../HomeAssets/intuit.png';




function App() {

  const [showForm, setShowForm] = useState(false);

  const handleTalkClick = () => {
    setShowForm(!showForm);
  };
  
  return (
    <>   
  
  {/*HOME PAGE*/}
  <div className="home-container">
  <div className="intuit-logo">
    <img src={intuitLogo} style = {{"width": "100px", "marginTop": "20px"}}/>
  </div>
  <div className="left-side">
    <h1>
      The Shirley <span className="highlight">Project</span>
    </h1>
    <h3>Hello! I am Shirley Huang!</h3>
    <div className="icons">
      <img src={mail} alt="Mail"/>
      <img src={linkedin} alt="LinkedIn" />
      <img src={git} alt="GitHub" />
    </div>
  </div>

    <div className="right-side">
      <img src={gif} style = {{width: "75%"}} alt="GIF" />
    </div>
    </div>


    {/*ABOUT SECTION*/}
    <div className="container3">
    
    <div className="left-side">
      <img src = {headshot} className="profile-image"></img>

    </div>


    <div
        className="right-side">

      <h2>Product-Oriented Developer <span className="highlight">By Heart</span></h2>
        <h3 style = {{fontSize: "15px"}}>
          <strong>📍 Hometown: Brampton, Ontario</strong> <br></br>
          <strong>📚 Carleton University (2022-2026),  Schulich School of Business (2020-2022) </strong>  <br></br>
          <strong>💻 Computer Science + Business Minor</strong>  <br></br>
          <strong> 🧑‍🏫 COMP 3005 (Database Management) Teacher's Assistant </strong> 
          <br />
        <div style = {{marginTop: "15px"}}> A highly creative and hands-on developer passionate about building user-centric solutions that blends functional design with cutting-edge AI to drive meaningful impact. </div>
        </h3>
  

        <div className="boxes">
          <div className="box">
            <h3 className = "boxheading">Programming</h3>
            <p className = "boxtext">
              JavaScript, TypeScript, Python, SQL, MongoDB, C, C++, Java, Node.js,
              Express.js, Angular, React, HTML, CSS, SPFx, ASP.NET
            </p>
          </div>
          <div className="box">
            <h3 className = "boxheading">Business</h3>
            <p className = "boxtext">Project Management, Agile Development, Strategic Planning</p>
          </div>
          <div className="box">
            <h3 className = "boxheading">Digital</h3>
            <p className = "boxtext">Adobe Photoshop, Figma, Google Analytics, SEMRush, Shopify, WordPress</p>
          </div>
        </div>
    </div>

    {/* */}
    </div>


    <div>
          <Timeline/>
      </div>

      <div>
        <FunFact/>
      </div>




    <div className = "container2">
    <div style={{
        position: "relative", 
        width: "100%", 
        height: "100px",
        paddingTop: "56.2500%", 
        paddingBottom: 0, 
        marginTop: "1.6em", 
        marginBottom: "0.9em", 
        overflow: "hidden", 
        borderRadius: "0px", 
        willChange: "transform"
    }}>
      
  <iframe loading="lazy" style={{
      position: "absolute", 
      width: "100%", 
      height: "100%", 
      top: 0, 
      left: 0, 
      border: "none", 
      padding: 0,
      margin: 0

    }}
    src="https://www.canva.com/design/DAGFPbHd8vU/OOI0WAeYvV7EdlEv0J_FPA/view?embed">
  </iframe>
</div>
      </div>

      

  

    <div className="container3">
      
    <div className="left-side">
        <div className="title-section">
          <h1>Thank you!</h1>
          <h2>Just glad you're here:</h2>
        </div>
        <div className="button-section">
          <button onClick={handleTalkClick}>Let's Talk</button>
          {showForm && (
          <div className="form-section">
            <label>
              Email:
              <input type="text" placeholder="Enter your Email Address" />
            </label>
            <label>
              Body:
              <textarea placeholder="Enter your message"></textarea>
            </label>
            <div className="send-button-container">
            <img src = {send} className="send-button"></img>
            </div>

          </div>
        )}
          <button>Let's Connect</button>
          <button>GitHub</button>
        </div>
        
        <div className="footer-section">
          <h3>Shirley Huang</h3>
          <h4>Developer</h4>
        </div>
      </div>

      <div className="right-side">
        <img src={headshot2} alt="Shirley Huang" className="right-image" />
      </div>

      </div>

      
      

    </>
  )
}

export default App
