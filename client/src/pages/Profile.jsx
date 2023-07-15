import React, { useContext, useState } from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { AuthContext } from "../context/authContext";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export default function Profile(props) {

  const { userData } = useContext(AuthContext);
  console.log(userData);
  console.log(userData?.name); // Safely access the name property of userData


  const [name, setName] = useState(userData?.name);
  const [email, setEmail] = useState(userData?.email);
  const [password, setPassword] = useState(userData?.password);
  const [imgUrl, setImgUrl] = useState(userData?.imgUrl);


  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePassowrdChange = (e) => setPassword(e.target.value);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagePath(URL.createObjectURL(file));
  };

 
  const handleSaveChanges = () => {
    const formData = new FormData();
        formData.append("cn_s2p", newProduct.cn_s2p);
        formData.append("cn_client", newProduct.cn_client);
        formData.append("company", newProduct.company);
        formData.append("description", newProduct.description);
        formData.append("image", newProduct.image);
        const response = await createProduct(formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
        console.log(response.data.inserted.imagePath);
        //after get the response dont show the form
        // const [showForm, setShowForm] = useState(false);
        console.log(
          `Created new product: ${response.data.inserted.description}`
        );

    const updatedUser = {
      ...userData,
      name,
      email,
      password,
      
    };
    console.log(updatedUser);
    props.onSaveChanges(updatedUser);
    props.onClose();
  };
  return (
    <ProtectedRoute allowedRoles={["all"]}>
      <>
        <div className="member-dashboard">
          {userData ? (
            <React.Fragment>
              <Container>
                <h1>עריכת פרופיל אישי</h1>

                <Row>
                  <Col>
                    <Form>
                    {imagePath && (
              <Card style={{ width: "18rem", marginBottom: "20px" }}>
                <Card.Img variant="top" src={imagePath} alt="pre image" />
              </Card>
            )}
                      <Form.Group controlId="formName">
                        <Form.Label>שם מלא:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="הכנס שם מלא"
                          value={name}
                          onChange={handleNameChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="הכנס כתובת אימייל תקינה"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>סיסמא:</Form.Label>
                        <Form.Control
                          minLength={6}
                          type="password"
                          placeholder="הכנס סיסמא"
                          value={password}
                          onChange={handlePassowrdChange}
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 form-group " controlId="formGroupFile">
              <Form.Label> תמונה:</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleImageChange}
              />
            </Form.Group>
                      <div className="d-flex justify-content-center  mt-4">
                        <Button variant="primary" onClick={handleSaveChanges}>
                          שמור שינויים
                        </Button>
                        <Button variant="secondary" onClick={props.onClose}>
                          סגור
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </React.Fragment>
          ) : (
            "משהו השתבש..."
          )}
        </div>
      </>
    </ProtectedRoute>
  );
}
