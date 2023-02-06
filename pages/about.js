import { Button, Container, Row } from "react-bootstrap";

const about = () => {
    return ( 
        <Container>
            <div className="about">
                <Row>
                    <h2> How it Works </h2>
                </Row>
                <Row>
                    <p>
                        <b>Atlas</b> is a machine-learning personal fitness trainer powered by the state-of-the-art GPT-3 technology developed by OpenAI. 
                        Our goal is to provide you with the most comprehensive and personalized fitness experience possible. 
                        With expertise in nutrition, bodybuilding, and weightlifting, Atlas is dedicated to helping people achieve their fitness goals.
                        Start your adventure today!
                    </p>
                </Row>
                <Row>
                    <p>
                        In order to use <b>Atlas</b>, you will need an API key from OpenAI. If you don&apos;t already have an account,
                        you will need to create one <a href="https://beta.openai.com/signup" target="_blank" rel="noreferrer">here</a>.
                    </p>
                    <img src="login.png" alt="OpenAI Login" className="center-image" style={{width: "700px"}}/>
                </Row>
                <Row>
                    <p>
                        Once you&apos;ve created an account, or if you already have one, navigate to the top left corner of the page and select your account.
                    </p>
                    <img src="homepage.png" alt="OpenAI Login" className="center-image" style={{width: "700px"}}/>
                </Row>
                <Row>
                    <p>
                        From there, select &quot;View API keys&quot;, and come to this page. Create a new secret key and copy it to use Atlas.
                    </p>
                    <img src="apikey.png" alt="OpenAI Login" className="center-image" style={{width: "700px"}}/>
                </Row>
                <Row>
                    <div className="buttons">
                        <Button size = 'lg' variant="dark" href="/chat">Ready?</Button>
                    </div>
                </Row>
            </div>
        </Container>
     );
}
 
export default about;