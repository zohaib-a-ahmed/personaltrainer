import { useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";

const ChatPage = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setInput('');
          if(input != ''){
            setMessages([...messages, { type: 'user', text: input }]);
        }
        }
      };

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
                    {messages.map((message, index) => (
                        <Row key={index} className="message">
                            <div className={message.type === 'user' ? 'user-input' : 'chatbot-response'}>
                                <div className = "speech-bubble">
                                    {message.text}
                                </div>
                            </div>
                        </Row>
                    ))}
                </div>
            </Row>
            <Row>
                <div className="input">
                    <Form className = "m-4">
                        <Form.Group>
                            <Form.Control 
                            placeholder="Ask me anything"
                            value = {input} onChange = {handleInput} onKeyDown={e => { handleKeyDown(e)}} ></Form.Control>
                            <Form.Text className="text-muted">
                                e.g. How should I get started weightlifting? 
                                I want to start to lose fat. What are some good nutrition tips? 
                                What kinds of cardio are there?</Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </Row>
        </div>
    </Container> );
}
 
export default ChatPage;