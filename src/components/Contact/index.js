import React, { useState } from "react";
import {validateEmail} from '../../utils/helpers';
import { Container, Row, Col } from "react-bootstrap";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(e) {
        // email validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    return (
        <Container className="contact">
            <Row>
                <Col className="contact-form">
                    <h2 data-testid='h2tag' id="contact">Contact Me</h2>
                    <form id="contact-form"  onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        {/* Message */}
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows={5} defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        {/* Submit Button */}
                        <button type="submit" data-testid='button'>Submit</button>
                    </form>
                </Col>
                <Col>
                    <h2>
                        Get in Touch
                    </h2>
                    <ul>
                        <li>
                            <a href="tel:PHONE_NUM">By Phone</a>
                        </li>
                        <li>
                            <a href="mailto:maclellanj15@gmail.com">By Email</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;