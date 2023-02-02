import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Chat = ({text, setMyText, setIsPending}) => {

    const [myValue, setMyValue] = useState('')

    async function generate(){
        setIsPending(true)
        setMyValue('')
        try {
            const response = await fetch("/api/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ scenario: myValue }),
            });
      
            const data = await response.json();
            if (response.status !== 200) {
              throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            setMyText(data.result)
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }
    }

    return ( 
        <div>
          
          {/* <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" value={myValue} 
        onChange={(e) => setMyValue(e.target.value)}>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </Form>
          <Button id = 'submit' variant = 'outline-dark' onClick = {()=>console.log("Clicked", myValue)}> Submit </Button> */}
        </div>
        );
}
 
export default Chat;