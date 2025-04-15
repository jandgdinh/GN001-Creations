import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleBlur = (field) => {
    let newErrors = { ...errors };
    if (!name && field === 'name') {
      newErrors.name = 'Name is required';
    } else if (field === 'name') {
      delete newErrors.name;
    }

    if (!email && field === 'email') {
      newErrors.email = 'Email is required';
    } else if (field === 'email') {
      delete newErrors.email;
    }

    if (!message && field === 'message') {
      newErrors.message = 'Message is required';
    } else if (field === 'message') {
      delete newErrors.message;
    }

    if (email && field === 'email' && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Send email using EmailJS
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
        .then((result) => {
          console.log(result.text);
          setSuccessMessage('Your message has been sent successfully!');
        })
        .catch((error) => {
          console.error(error.text);
          setSuccessMessage('Failed to send your message. Please try again later.');
        });

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
          className="form-input"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          className="form-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
          className="form-input"
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="form-button">Submit</button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;
