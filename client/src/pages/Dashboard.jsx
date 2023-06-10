import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Users from "../components/Users/UsersList";
import Schedules from "../components/Schedules/Schedules";
import WorkerRequests from "../components/WorkerRequests/WorkerRequests";
import { FaUsers } from "react-icons/fa";
import { GrCompliance, GrSchedule } from "react-icons/gr";
import { BiUserPlus } from "react-icons/bi";

import "./Page.css";
import Roles from "./Roles";
import RoleList from "../components/RoleList/RoleList";

export default function Dashboard() {
  return (
    <div className="Page">
      <h1>ברוך הבא מנהל יקר! מה ברצונך לעשות?</h1>
      <Container>
        <Row className="mt-4 mb-4">
          <Col>
            <Link to="/Users">
              <Button variant="primary" size="lg" block="true">
                <FaUsers /> ניהול משתמשים
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/Roles">
              <Button variant="warning" size="lg" block="true">
                <BiUserPlus /> ניהול תפקידים
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/Schedules">
              <Button variant="success" size="lg" block="true">
                <GrSchedule /> ניהול סידורי עבודה
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/manage-employee-requests">
              <Button variant="danger" size="lg" block="true">
                <GrCompliance /> ניהול בקשות עובדים
              </Button>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="mb-3">
            <Users></Users>
          </Col>
          <Col>
            <RoleList></RoleList>
          </Col>
          <Col>
            <Schedules></Schedules>
          </Col>
          <Col>
            <WorkerRequests></WorkerRequests>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
