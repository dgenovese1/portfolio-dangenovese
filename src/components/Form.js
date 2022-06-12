import "./FormStyles.css";
import React from "react";

const Form = () => {
    return (
        <div className="form">
            <form action="https://submit-form.com/FVJpxM2a">
                    <label for="name">Your Name</label>
                    <input name="Name" id="name" type="text" required />
                    <label for="email">Your Email</label>
                    <input name="Email" id="email" type="email" required />
                    <label>Message</label>
                    <textarea name="message" rows="6" placeholder="Enter your message here"></textarea>
                    <input className="btn" type="submit" value="Send" required/>
            </form>
        </div>
    );
};

export default Form;