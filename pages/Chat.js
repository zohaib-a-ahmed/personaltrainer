import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Chat = ({text, setMyText}) => {

    const [myValue, setMyValue] = useState('')

    function submit(){
        setMyText(myValue) //set text to generated response from api
        setMyValue('')
    }


    return ( 
        <div className = 'chat'>
            <TextField multiline fullWidth id='input' color='secondary' variant="standard" value={myValue} 
			onChange={(e) => setMyValue(e.target.value)} ></TextField>
            <Button id = 'submit' color = 'secondary' onClick = {()=>submit()}> Submit </Button>
        </div>
        );
}
 
export default Chat;