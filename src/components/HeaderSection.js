import React from 'react';

export const HeaderSection = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <div className="col span-1-of-10">
            Demo
            <span>
              (<span className="login-link">sign in</span>)
            </span>
          </div>
          <div className="col span-8-of-10">
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
      <div className="hero-banner"></div>
    </header>
  );
};

export default HeaderSection;
