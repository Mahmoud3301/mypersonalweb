import React, { useRef, useState } from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mahmoudsaidmansour1000@gmail.com",
    link: "mailto:mahmoudsaidmansour1000@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Messenger Chat",
    link: "https://m.me/mahmoud.saeed100452",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "+20 106 376 1694",
    link: "https://api.whatsapp.com/send?phone=201063761694",
  }
];

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const EMAILJS_SERVICE_ID  = 'service_lt13eqr';
const EMAILJS_TEMPLATE_ID = 'template_ekyt0ir';
const EMAILJS_PUBLIC_KEY  = 'q0kIt_yepoFXbETEj';

function Contact() {
  const form = useRef();
  const [status, setStatus]   = useState(STATUS.IDLE);
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Use form.elements to safely access named inputs
    const nameVal    = form.current.elements['name']?.value?.trim()    ?? '';
    const emailVal   = form.current.elements['email']?.value?.trim()   ?? '';
    const messageVal = form.current.elements['message']?.value?.trim() ?? '';

    // Client-side validation
    if (!nameVal || !emailVal || !messageVal) {
      setStatus(STATUS.ERROR);
      setErrorMsg('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setStatus(STATUS.ERROR);
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus(STATUS.LOADING);
    setErrorMsg('');

    // Use emailjs.send() with explicit template params for reliability
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: nameVal,
        from_email: emailVal,
        name:    nameVal,
        email:   emailVal,
        message: messageVal,
        reply_to: emailVal,
      },
      EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus(STATUS.SUCCESS);
        form.current.reset();
        setTimeout(() => setStatus(STATUS.IDLE), 6000);
      },
      (error) => {
        console.error('EmailJS error:', error);
        setStatus(STATUS.ERROR);
        const detail = error?.text || error?.message || '';
        setErrorMsg(
          detail
            ? `Failed to send: ${detail}`
            : 'Could not send your message. Please email me directly at mahmoudsaidmansour1000@gmail.com'
        );
      }
    );
  };

  const isLoading = status === STATUS.LOADING;

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">

        {/* Contact option cards */}
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className='contact_option'>
              <span className="contact_icon">{icon}</span>
              <h4>{title}</h4>
              <p className="contact_info">{info}</p>
              <a href={link} target='_blank' rel="noreferrer">Send Message</a>
            </article>
          ))}
        </div>

        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail} noValidate>
          <input
            type="text"
            placeholder='Full Name'
            name='name'
            required
            disabled={isLoading}
          />
          <input
            type="email"
            placeholder='Your Email'
            name='email'
            required
            disabled={isLoading}
          />
          <textarea
            rows={7}
            name="message"
            placeholder='Enter Your Message'
            required
            disabled={isLoading}
          />

          <button type="submit" className='btn btn-primary' disabled={isLoading}>
            {isLoading ? (
              <span className="sending-spinner">
                <span className="spinner" /> Sending…
              </span>
            ) : 'Send Message'}
          </button>

          {status === STATUS.SUCCESS && (
            <p className="status_message status_success">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === STATUS.ERROR && (
            <p className="status_message status_error">
              ❌ {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
