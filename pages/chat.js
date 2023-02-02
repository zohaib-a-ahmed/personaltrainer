import { Container, Row, Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const chat = () => {

    //Place API Key into .env 

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <div className="chat">
            <div className="modal">
                <Modal show={showModal} onHide={() => setShowModal(false)} 
                aria-labelledby="contained-modal-title-vcenter" centered size = "md"
                backdrop = "static">
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type = "email" placeholder="Enter your OpenAI API Key"></Form.Control>
                                <Form.Text className="text-muted">Your API Key will never be shared.</Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Already have an account? Button to be added*/}
                        <Button variant="dark">Submit</Button>
                        <Button variant="outline-dark" href = "/about">Don't have a key?</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Container fluid>
                <Row>
                    <div>
                        <h1> Your Personal Trainer </h1>
                        <p> Let's talk about your <strong>goals</strong>. I'll figure out the rest.</p>
                    </div>
                </Row>
                <Row>
                    <div>
                        Hi
                    </div>
                </Row>
            </Container>
        </div>
    );
}
 
export default chat;