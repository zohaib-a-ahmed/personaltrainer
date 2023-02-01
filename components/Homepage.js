import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Homepage = () => {

    const animation = useRef(null);
    const typed = useRef(null);

    //typing effect on page render
    useEffect(() => {
        const options = {
        strings: [
            'Here to answer all of your <strong>training questions<strong>.',
            'Here to help with your <strong>diet and nutrition<strong>.',
            'Here to push you to a <strong>healthier lifestyle<strong>',
            'Here to guide you on your <strong>fitness journey<strong>.'
        ],
        typeSpeed: 40,
        backSpeed: 30,
        };

        typed.current = new Typed(animation.current, options);

        return () => {
        typed.current.destroy();
        }
    }, [])

    return ( 
        <div className="home">
        <Container>
          <Row>
              <h1>Atlas</h1>
              <div className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={animation} />
              </div>
          </Row>
          <Row>
            <div className="buttons">
              <Button size = "md" variant = "dark"> Get Started </Button>
              <Button size = "md" variant = "outline-dark"> See How It Works </Button>
            </div>
          </Row>
        </Container>
      </div>
     );
}
 
export default Homepage;