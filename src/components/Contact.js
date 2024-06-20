// src/components/Contact.js
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";


function Contact() {
  return (
    <section id="contact">
      <div className='contactBox'>
        <div className='contactThird' id='myResume'>
        <h2>My Resume</h2>
        <div className="linkBoxItem" id='resumeIcon' ><a target="blank" class="no-decor" href='https://www.canva.com/design/DAFkWGPTl9A/K56vHT6ETAgXeyzMa2e-fA/view?utm_content=DAFkWGPTl9A&utm_campaign=designshare&utm_medium=link&utm_source=viewer'><FaWpforms size={70} /></a></div>
        </div>
        <div className='contactThird' id='myLinks'>
          <h2>My Links</h2>
          <div id='linkBox'>
          <div className="linkBoxItem"><a target="blank" class="no-decor" href='https://www.linkedin.com/in/kyleforsyth/'><AiOutlineLinkedin size={70} /></a></div>
            <div className="linkBoxItem"><a target="blank" class="no-decor" href='https://github.com/cupokyle'><DiGithubBadge size={70} /></a></div>
          </div>
        </div>
        <div className='contactThird' id='myInfo'>
        <h2>My  Info</h2>
        <p>Email: kyleforsythcomedy@gmail.com</p>
        <p>City: Toronto, ON, Canada</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
