import React from 'react';
import logo from '../logo125.png';

export const FooterSection = () => {
  return (
    <footer>
      <div className="row logo">{<img src={logo} alt="logo"></img>}</div>
      <div className="row copy">
        <p>
          Copyright &copy; 2020 by Closet Space Comics. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
