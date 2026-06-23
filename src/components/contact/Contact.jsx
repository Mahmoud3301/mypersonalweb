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
    info: "01063761694",
    link: "https://api.whatsapp.com/send?phone=201063761694",
  }
];

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lt13eqr',
      'template_ekyt0ir',
      form.current,
      'q0kIt_yepoFXbETEj'
    ).then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatus("Failed to send the message. Try again.");
      }
    );
  };

  return (    
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        
        {/* 👇 البوكسات */}
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <p className="contact_info">{info}</p>
              <a href={link} target='_blank' rel="noreferrer">Send Message</a>
            </article>
          ))}
        </div>

        {/* 📩 الفورم */}
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            placeholder='Full Name' 
            name='name' 
            required 
          />
          <input 
            type="email" 
            placeholder='Your Email' 
            name='email' 
            required 
          />
          <textarea 
            rows={10} 
            name="message" 
            placeholder='Enter Your Message' 
            required
          ></textarea>
          <button type="submit" className='btn btn-primary'>
            Send Message
          </button>
          {status && <p className="status_message">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact;
