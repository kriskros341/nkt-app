import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="Footer inner-shadow">
      <ul>
        <li className="left"><a href="https://www.nkt.com.pl/o-nas">O Nas</a></li>
        <li className="left"><a href="https://www.nkt.com.pl/kontakt">Kontakt</a></li>
        <li className='center'>©NKT A/S 2023</li>
        <hr className="horizontal-mini"/>
        <hr className="rotated1"/>
        <hr className="rotated2"/>
      </ul>
    </footer>
  );
};

export default Footer;