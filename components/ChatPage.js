import { useState, useEffect } from "react";
import { Container, Form, Row} from "react-bootstrap";

const ChatPage = (props) => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [initial, setInitial] = useState(true);

    useEffect(() => {
        // Double render in npm dev NOT in npm build + npm start
        if(!props.showModal && initial){
            // Hello msg appear after api key modal
            generate("Hi. Who are you?");
            setInitial(false);
        }
    }, [props.showModal, initial])

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          setInput('');
          if(input != ''){
            setMessages(messages => [...messages, { type: 'user', text: input }]);
            generate(input);
          }
        }
      };

      async function generate(text){
        try {
            const response = await fetch("/api/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ human: text }),
            });
      
            const data = await response.json();
            if (response.status !== 200) {
              throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            setMessages(messages => [...messages, { type: 'chatbot', text: data.result }])
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }
    }  

    return (            
    <Container>
        <div className="chat-container">
            <Row>
                <div>
                    <h1> Your Personal Trainer </h1>
                    <p> Let&apos;s talk about your <strong>goals</strong>. I&apos;ll figure out the rest.</p>
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
                                e.g. How can I lose fat?
                                What are some lesser calories foods for a sweet tooth?
                                What is proper form for a hack squat? 
                                What other kinds of cardio are there besides walking/running?</Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </Row>
        </div>
    </Container> );
}
 
export default ChatPage;