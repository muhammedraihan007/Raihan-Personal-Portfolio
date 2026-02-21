import React from 'react';
import Section from './Section';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-subtitle">Let's Connect</h3>
                    <p className="contact-description">
                        I'm currently looking for new opportunities as an entry-level Software/Web Developer.
                        Whether you have a question or just want to discuss potential roles,
                        feel free to reach out. I'll get back to you as soon as possible!
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon"><Mail size={20} className="text-accent" /></div>
                            <a href="mailto:raihanmuhammed0077@gmail.com">raihanmuhammed0077@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><Phone size={20} className="text-accent" /></div>
                            <span>+91 8848932507</span>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><MapPin size={20} className="text-accent" /></div>
                            <span>Kerala, India</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form card" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
