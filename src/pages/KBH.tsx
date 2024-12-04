import React from "react";
import "./KBH.css";
import kbh from '../../WorkAssets/kbh.png'
import kbH2 from '../../WorkAssets/kbh2.png'



const Home: React.FC = () => {
  return (
    <div className="kbh-container">
      <div className="kbh-left-side">
        <div className="kbh-top">
          <img src={kbH2} alt="Kay Blair Hospice" className="kbh-image" />
        </div>
        <div className="kbh-bottom">
          <h1 className="kbh-title">Kay Blair Hospice</h1>
          <h2 className="kbh-subtitle">2022 - Web Designer</h2>
        </div>
      </div>
      <div className="kbh-right-side">
        <div className="kbh-top">
          <img src={kbh} alt="Project Highlight" className="kbh-image" />
        </div>
        <div className="kbh-middle">
          <h3 className="kbh-heading">Built for SEO optimization</h3>
          <p className="kbh-paragraph">
            Implementing user-friendly design, with a strong emphasis on branding and
            accessibility of information. Focused heavily on SEO optimization, resulting
            in site placed high in keyword searches and an increase in site traffic,
            generating over 10,000+ visitors in 2023.
          </p>
        </div>
        <div className="kbh-bottom">
          <h3 className="kbh-heading">MORE THAN JUST DESIGNING WEBSITE...</h3>
          <p className="kbh-paragraph">
            I played a pivotal role in acquiring sponsorships, forming partnerships, and
            attracting prospects to raise funds and garner support for building the
            hospice. This involved collaboration with The City of Brampton, Tim Horton
            Smile Cookie Campaign, and Trillium Ontario. Most notable achievement was
            securing support from Yew-Thong, head of Architectural TMU, resulting in an
            estimated cost-saving of $60,000 for the project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
