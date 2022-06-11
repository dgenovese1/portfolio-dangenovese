import "./FormStyles.css";
import React from "react";

const Form = () => {
    return (
        <div className="form">
            <form action="https://public.herotofu.com/v1/45074a50-e9b9-11ec-94cd-436cd72d679b" method="post">
                    <label for="name">Your Name</label>
                    <input name="Name" id="name" type="text" required />
                    <label for="email">Your Email</label>
                    <input name="Email" id="email" type="email" required />
                    <label>Message</label>
                    <textarea rows="6" placeholder="Enter your message here"></textarea>
                    <input className="btn" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Form;