import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import ChatPage from "@/components/ChatPage";

const chat = () => {

    // initial render
    useEffect(() => {
        if(!key){ // change to pull key from session storage, if there is no key, then show modal.
            setShowModal(true);
        }
    }, []);

    // API Key State + Modal bool
    const [key, setKey] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Handle methods
    const handleClose = () => {
        if(key){
            setShowModal(false);
            // push key to session storage
        }
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
                        <Button variant="outline-dark" href = "/about">Don't have a key?</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <ChatPage></ChatPage>
        </div>
    );
}
 
export default chat;