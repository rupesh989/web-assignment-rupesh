import React from 'react';
import './AboutUs.css';
import AboutBanner from '../Images/pmentre-about-us-page-banner.webp';
import AboutImage from '../Images/about-pmentire-img.webp';
import HistoryImage from '../Images/history-about-us.webp';
import InnovationImage from '../Images/Our-Innovation-about-us.webp';

const AboutUs = () => {
  return (
    <>
     
      <div className="banner-container">
        <img src={AboutBanner} alt="About Us Banner" className="AboutBanner" />
        <div className="bannerTextA">
          PMEntire Helps Redefine Your <span className="highlight-text">Business Efficiency</span>
        </div> 
      </div>

      <div className='main-container'> 
      
      <section className="about-section">
        <div className="about-content">
        <img src={AboutImage} alt="About PMEntire" className="imageContainer_image" />
          <div className="about-info">
            <h1>About PMEntire</h1>
            <p>
              PMEntire software empowers professional service organizations to reach new levels of efficiency and profitability.
              With over 20 years of industry experience, our PSA tool is designed to help businesses overcome the challenges of the 2020s and beyond.
              Some of them include global competition, market volatility, business uncertainties, and more.
              PMEntire specializes in PSA software and it is a part of the Saviom group of companies.
              Saviom has catered to the needs of several Fortune 500 companies across 50+ countries.
              Some of our notable customers include Siemens, Fujitsu, DHL, Honeywell, Global Wind Services, Alix Partner, and many more.
            </p>
          </div>
        
        </div>
      </section>

     
      <section className="about-section">
        <div className="history-content">
          <div className="history-text">
            <h1>History</h1>
            <p>
              Saviom is the brainchild of 4 passionate and visionary entrepreneurs who aspired to develop a product for increasing business efficiency.
              Starting as a bootstrapped business in 1999 from a Sydney suburban garage, today we are a name to reckon with in resource management.
              Riding on the success of our ERM solution, we were motivated to come up with our next offering in the PSA space.
              There is constant growth in this space, and we believe we can make a difference in solving the pertinent challenges faced by professional service organizations today.
            </p>
          </div>
          <img src={HistoryImage} alt="History of PMEntire" className="imageContainer_image" />
        </div>
      </section>

      <section className="about-section">
        <div className="innovation-content">
        <img src={InnovationImage} alt="Innovation at PMEntire" className="imageContainer_image" />
          <div className="innovation-text">
            <h1>Our Innovation</h1>
            <p>
              At PMEntire, we constantly innovate and develop futuristic solutions to help our customers achieve greater operational efficiency and productivity.
              Besides, our intuitive solutions enable businesses to forecast and be proactive.
              Starting as pioneers in resource management, today, our products are several years ahead of the market.
              We foster an innovative culture wherein out-of-the-box ideas are encouraged and evaluated.
            </p>
          </div>
          
        </div>
      </section></div>
    </>
  );
};

export default AboutUs;
