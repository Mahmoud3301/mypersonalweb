import React, { useRef, useState } from 'react';
import './contact.css';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from '@emailjs/browser';

const MY_EMAIL = 'mahmoudsaidmansour1000@gmail.com';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: MY_EMAIL,
    link: `mailto:${MY_EMAIL}`,
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
  const [status, setStatus]     = useState(STATUS.IDLE);
  const [fallbackHref, setFallbackHref] = useState('');

  // Build a mailto: fallback using whatever the user typed
  const buildMailtoFallback = (nameVal, emailVal, messageVal) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${nameVal}`);
    const body    = encodeURIComponent(
      `Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`
    );
    return `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const nameVal    = form.current.elements['name']?.value?.trim()    ?? '';
    const emailVal   = form.current.elements['email']?.value?.trim()   ?? '';
    const messageVal = form.current.elements['message']?.value?.trim() ?? '';

    if (!nameVal || !emailVal || !messageVal) {
      setStatus(STATUS.ERROR);
      setFallbackHref('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setStatus(STATUS.ERROR);
      setFallbackHref('');
      return;
    }

    setStatus(STATUS.LOADING);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  nameVal,
        from_email: emailVal,
        name:       nameVal,
        email:      emailVal,
        message:    messageVal,
        reply_to:   emailVal,
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
        // Build a mailto fallback so the user can still reach out
        const href = buildMailtoFallback(nameVal, emailVal, messageVal);
        setFallbackHref(href);
        setStatus(STATUS.ERROR);
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
            <div className="status_message status_error">
              {fallbackHref ? (
                <>
                  <p>⚠️ Couldn't send via the form right now.</p>
                  <a href={fallbackHref} className="mailto_fallback_btn">
                    📧 Click here to send via your Email app instead
                  </a>
                  <p className="fallback_note">
                    Or email me directly at{' '}
                    <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a>
                  </p>
                </>
              ) : (
                <p>❌ Please fill in all fields with a valid email address.</p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
