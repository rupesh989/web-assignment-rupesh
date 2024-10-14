import React, { useRef, useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const companyRef = useRef(null);
    const messageRef = useRef(null);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            company: companyRef.current.value,
            message: messageRef.current.value
        });
    }

    return (
        <section className="contactUs">
            <div className="gridContainer">
                <div className="imageContainer">
                    <img src="../src/Images/contact-main-img.jpg" alt="Contact Us Banner" />
                </div>
                <div className="formContainer">
                    <p>
                        Want to try out our software solutions? Or speak to one of our sales representatives who can quickly understand your requirements? 
                        <b>Fill out the form below to register your interest!</b>
                    </p>
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Name: </label>
                            <input type="text" placeholder='Name' ref={nameRef} required />

                            <label htmlFor="">Email: </label>
                            <input type="email" placeholder='Email' ref={emailRef} required />

                            <label htmlFor="">Phone No: </label>
                            <input type="tel" placeholder='Phone No.' ref={phoneRef} required />

                            <label htmlFor="">Company: </label>
                            <input type="text" placeholder='Company (optional)' ref={companyRef} />

                            <label htmlFor="">Message: </label>
                            <textarea placeholder='Message' ref={messageRef}></textarea>
                        </div>
                        <button type='submit'>REQUEST A FREE TRIAL</button>
                    </form>

                    <div id='formInput'>Form Input:
                        <p>{formValues.name}</p>
                        <p>{formValues.email}</p>
                        <p>{formValues.phone}</p>
                        <p>{formValues.company}</p>
                        <p>{formValues.message}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
