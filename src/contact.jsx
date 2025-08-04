import React from 'react';
import './Style.css';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgqbjqj"); // your form ID from Formspree

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>

      {state.succeeded ? (
        <p className="success-message">
          ✅ Thank you! Your message has been successfully sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form-underline">
          <div className="contact-field-underline">
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              required
            />
          </div>

          <div className="contact-field-underline">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          <div className="contact-field-underline">
            <textarea
              id="message"
              rows="4"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="contact-btn-underline"
          >
            {state.submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
