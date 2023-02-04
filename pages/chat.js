import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import ChatPage from "@/components/ChatPage";
import axios from "axios";

const Chat = () => {

    // API Key State + Modal bool
    const [key, setKey] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [initial, setInitial] = useState(false);

    // initial render
    useEffect(() => {
        //
        if (!key) {
          setShowModal(true);
        }
      }, []);

    // Handle methods
    const handleClose = async () => {
        if (key) {
          setShowModal(false);
          //Find a way to send api key to backend
          sendApiKey(key);
        }
      };
    
    async function sendApiKey(apiKey) {
        const res = await axios.post('/api/gpt3', { apiKey });
        if(res.status === 200){
            setInitial(true);
        }
        //else invalid key error
    }

    const handleChange = (e) => {
        setKey(e.target.value);
    }

    return (
        <div className="chat">
            <div className="modal">
                <Modal show={showModal} onHide={() => setShowModal(false)} 
                aria-labelledby="contained-modal-title-vcenter" centered size = "md"
                backdrop = "static">
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control type = "password" placeholder="Enter your OpenAI API Key" value = {key} onChange = {handleChange}></Form.Control>
                                <Form.Text className="text-muted">Your API Key will never be shared.</Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* Already have an account? Button to be added*/}
                        <Button variant="dark" onClick={handleClose}>Submit</Button>
                        <Button variant="outline-dark" href = "/about">Don&apos;t have a key?</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <ChatPage showModal = {showModal} initial = {initial} setInitial = {setInitial}></ChatPage>
        </div>
    );
}
 
export default Chat;