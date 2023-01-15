import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Chat = ({text, setMyText}) => {

    const [myValue, setMyValue] = useState('')

    async function generate(){
        try {
            const response = await fetch("/api/generate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ scenario: text }),
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
        <div className = 'chat'>
            <TextField multiline fullWidth id='input' color='secondary' variant="standard" value={myValue} 
			onChange={(e) => setMyValue(e.target.value)} ></TextField>
            <Button id = 'submit' color = 'secondary' onClick = {()=>generate(myValue)}> Submit </Button>
        </div>
        );
}
 
export default Chat;