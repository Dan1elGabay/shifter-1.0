import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import "./UserDashboard.css";
import backgroundImgae from '../images/dashboardbackground.jpg'
export default function UserDashboard(props) {
  return (
    <>
    <div className="member-dashboard">
      <Container>
        <h1>שלום {props.user.name}, מה ברצונך לעשות?</h1>
        <Row className="dashboard-Overview">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>סקירה כללית</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                  <strong> </strong>
                  <strong>סה"כ משמרות לחודש הקרוב</strong>: 50
                    <br />
                    משמרות שהושלמו: 35
                    <br />
                    משמרות ממתינות: 15
                    <br />
                    ימי חופש שנוצלו: 15
                    <br />
                    ימי מחלה שנוצלו: 15
                  </ListGroup.Item>
                </ListGroup>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>המשמרות הקרובה</Card.Title>
                <ListGroup>
                  <ListGroup.Item>
                    <strong>תאריך:</strong> 10 ביוני 2023
                    <br />
                    <strong>שעה:</strong> 9:00 - 17:00
                    <br />
                    <strong>מיקום:</strong> שער כניסה
                    <br />
                    <strong>צוות מוקצה:</strong> לימור אבני,עידו כהן 
                  </ListGroup.Item>
                  {/* הוסף פריטי רשימה נוספים לכל משמרת */}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
            <Card.Body>
                <Card.Title>התראות ועדכונים</Card.Title>
                <ListGroup>
                  <ListGroup.Item variant="danger">
                    המשמרת ל-5 ביוני בוטלה.
                  </ListGroup.Item>
                  <ListGroup.Item variant="warning">
                    תזכורת: המשמרת שלך ב-12 ביוני מתחילה ב-10:00 בבוקר.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="dashboard-actions">
          <Col>
            <Link to="/profile">
              <Button variant="primary" size="lg" block="true">
                <FaUser className="dashboard-icon" /> צפיה בפרופיל שלי
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/schedule">
              <Button variant="warning" size="lg" block="true">
                <FaCalendarAlt className="dashboard-icon" /> צפיה במשמרות שלי
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/time-tracking">
              <Button variant="success" size="lg" block="true">
                <FaClock className="dashboard-icon" /> עדכן זמינות לסידור עבודה
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}
