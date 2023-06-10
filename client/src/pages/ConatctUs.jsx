import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import shapeImg from '../images/shape.png';
import locationImg from '../images/location.png';
import emailImg from '../images/email.png';
import phoneImg from '../images/phone.png';
import './ContactUs.css'
export default function ConatctUs() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <div className="square">
            <img src={shapeImg} alt="" />
          </div>
          <div className="form">
            <div className="contact-info">
              <h3 className="title">יצירת קשר</h3>
              <h4 className="text">
                התקשרו אלינו כדי לקבוע פגישה או לשאול שאלות בנוגע לניהול המשמרות שלכם.
              </h4>

              <div className="info">
                <div className="information">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                  <p>רחוב שוהם 10, רמת גן</p>
                </div>
                <div className="information">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <p>office@Shifter.com</p>
                </div>
                <div className="information">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <p>02-456-789</p>
                </div>
              </div>

              <div className="social-media ">
                <h4>עקבו אחרינו ברשתות החברתיות(:</h4>
                <div className="social-icons d-flex justify-content-center">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <Form action="index.html" autoComplete="off">
              <h3 className="title">נשמח לשמוע ממך...</h3>
              <div className="input-container">
                <Form.Label>שם משתמש</Form.Label>
                <Form.Control type="text" name="name" className="input" />
              </div>
              <div className="input-container">
                <Form.Label>אימייל</Form.Label>
                <Form.Control type="email" name="email" className="input" />
              </div>
              <div className="input-container">
                <Form.Label>טלפון</Form.Label>
                <Form.Control type="tel" name="phone" className="input" />
              </div>
              <div className="input-container textarea">
                <Form.Label>הודעה</Form.Label>
                <Form.Control as="textarea" name="message" className="input" />
              </div>
              <Button type="submit" className="btn-submit">שלח</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
