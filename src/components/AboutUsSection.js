import React from 'react';

export const AboutUsSection = () => {
  return (
    <section id="section-about-us">
      <div className="about-header">Stuff To Do</div>
      <div className="row">
        <div className="col span-1-of-3">
          <h4>Catalog</h4>
          <ul>
            <li>Add search by Title</li>
            <li>Switch to title issue list in Zoom</li>
          </ul>
        </div>
        <div className="col span-1-of-3">
          <h4>Collection</h4>
          <ul>
            <li>Drag and drop ordering within boxes</li>
            <li>Move Book between Boxes</li>
          </ul>
        </div>
        <div className="col span-1-of-3">
          <h4>Purchases</h4>
          <ul>
            <li>Formatting for purchase list</li>
            <li>Add Search by date</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
