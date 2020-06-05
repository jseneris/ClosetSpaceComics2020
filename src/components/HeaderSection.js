import React from 'react';

export const HeaderSection = () => {
  return (
    <header>
      <nav>
        <div className="row">
          {/*<div className="col span-2-of-12">
             Demo
            <span>
              (<span className="login-link">sign in</span>)
            </span> 
          </div>*/}
          <div className="col span-12-of-12">
            <ul className="main-nav">
              <li>
                <a href="#section-catalog" className="btn-nav">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#section-collection" className="btn-nav">
                  Collection
                </a>
              </li>
              <li>
                <a href="#section-purchases" className="btn-nav">
                  Purchases
                </a>
              </li>
              <li>
                <a href="#section-about-us" className="btn-nav">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="hero-banner"></div>
    </header>
  );
};

export default HeaderSection;
