import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import "./Page.css";
import { BiCheckCircle } from "react-icons/bi";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import homepageImage from "../images/homepageimage-removebg-preview.png";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="HomePage">
      <div className="heroContainer">
        <Row>
          <Col className="d-flex flex-column align-items-center ">
            <div className="titlesContainer enterEffect">
              <h1>ברוכים הבאים למערכת Shifter</h1>
              <h2>מערכת שחוסכת זמן יקר בניהול המשמרות</h2>
            </div>
            <div className="buttonsContainer enterEffect">
              <Link to="/Login">
                <Button variant="primary" style={{ marginLeft: "0.5rem" }}>
                  אם יש ברשותך משתמש לחץ להתחברות
                </Button>
              </Link>
              <Link to="/Login">
              <Button variant="secondary"> לחץ כאן להרשמה</Button>
              </Link>

            </div>
          </Col>
          {/* <Col></Col> */}
        </Row>
      </div>
    </div>
  );
}
