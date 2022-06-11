import "./FooterStyles.css";

import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";






const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Cream Ridge</p>
                            <p>New Jersey.</p>
                        </div>
                    </div>
                    <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    (732)-804-3109</h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                            Dangenovese123@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>This is my Professional Portfolio. I am open to new Business opportunities that will allow me to utilize my skills as a Full Stack Web Developer.</p>
                    <div className="social">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;