import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer style={{flex: "0 0 4rem"}} className="Footer inner-shadow fixed bottom-0">
      <ul>
        <li className="left text-white"><a href="https://www.nkt.com.pl/o-nas">O Nas</a></li>
        <li className="left text-white"><a href="https://www.nkt.com.pl/kontakt">Kontakt</a></li>
        <li className='center text-white'>©NKT A/S 2023</li>
        <hr className="horizontal-mini"/>
        <hr className="rotated1"/>
        <hr className="rotated2"/>
      </ul>
    </footer>
  );
};

export default Footer;