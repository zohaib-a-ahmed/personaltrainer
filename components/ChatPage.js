import { Container, Form, Row, Button } from "react-bootstrap";

const ChatPage = () => {
    return (            
    <Container>
        <div className="chat-container">
            <Row>
                <div>
                    <h1> Your Personal Trainer </h1>
                    <p> Let's talk about your <strong>goals</strong>. I'll figure out the rest.</p>
                </div>
            </Row>
            <Row>
                <div className="screen">
                    <div className="user-input">
                        <div className="speech-bubble">
                            Your message text goes here.
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="input">
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="Ask anything."></Form.Control>
                        </Form.Group>
                        <Button className = "m-2" variant="outline-dark">Submit</Button>
                    </Form>
                </div>
            </Row>
        </div>
    </Container> );
}
 
export default ChatPage;