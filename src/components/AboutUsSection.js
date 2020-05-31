import React from 'react';

export const AboutUsSection = () => {
  return (
    <section id="section-about-us">
      <div className="about-header">Stuff To Do</div>
      <div className="row">
        <div className="col span-1-of-3">
          <h4>Catalog</h4>
          <ul>
            <li>Search By Title Option</li>
            <ul>
              <li>Add</li>
            </ul>
            <li>Clean Up Zoom</li>
            <ul>
              <li>Fix margins for sections</li>
              <li>Extend filter to bottom scroll</li>
              <li>Switch to title issue scroll?</li>
            </ul>
          </ul>
        </div>
        <div className="col span-1-of-3">
          <h4>Collection</h4>
          <ul>
            <li>Location List</li>
            <ul>
              <li>Formatting</li>
            </ul>
            <li>Box List</li>
            <ul>
              <li>Formatting</li>
            </ul>
            <li>Display</li>
            <ul>
              <li>Formatting</li>
              <li>Move Books</li>
              <ul>
                <li>Change Order Within Box</li>
                <li>Move Book between Boxes</li>
              </ul>
            </ul>
            <li>Refactor</li>
          </ul>
        </div>
        <div className="col span-1-of-3">
          <h4>Purchases</h4>
          <ul>
            <li>Purchase List</li>
            <ul>
              <li>Formatting for purchase list</li>
              <li>Handle end of list for more button</li>
              <li>Collapse purchase list when purchase selected</li>
              <li>Refactor</li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
