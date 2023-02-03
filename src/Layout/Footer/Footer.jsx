import React from "react";
import logo2 from '../../Assets/Vector.png';
import logo3 from '../../Assets/Vector2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
           <ul className="footer__list">
            <li> <img src={logo2}></img><img src={logo3}></img></li>
            <li>Партнерам</li>
            <li>Разработчикам</li>
            <li>Вакансии</li>
           </ul>
           <div className="intocode">ООО “интукод”, 2020г.</div>
          
        </footer>
    )
}
export default Footer;