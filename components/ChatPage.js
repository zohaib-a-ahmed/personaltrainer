import { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

const ChatPage = () => {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        //send req to API
        //place text into chat
        console.log(input)
        setInput('');
    }

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

                </div>
            </Row>
            <Row>
                <div className="input">
                    <Form>
                        <Form.Group>
                            <Form.Control 
                            placeholder="e.g. How should I get started weightlifting? I want to start to lose fat. What are some good nutrition tips? What kinds of cardio are there?"
                            value = {input} onChange = {handleInput}></Form.Control>
                        </Form.Group>
                        <Button size = "md" className = "m-2" variant="outline-dark" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </div>
            </Row>
        </div>
    </Container> );
}
 
export default ChatPage;