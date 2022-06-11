import "./AboutContentStyles.css";
import React from "react";
import {Link} from "react-router-dom";
import reactImg from "../assets/react.jpg";
import fullstackImg from "../assets/fullstackimg.jpg"


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full Stack Web Developer. I create professional responsive, secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            </div>


            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={fullstackImg} className="img" alt="true"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={reactImg} className="img" alt="true"/>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default AboutContent;