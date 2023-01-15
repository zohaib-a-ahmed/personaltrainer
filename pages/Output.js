import { useEffect, useState } from 'react';

const Output = ({text}) => {
    const [output, setOutput] = useState("Welcome to Atlas, your personal trainer A.I.! I am excited to work with you on your fitness journey. Whether you're looking to lose weight, gain muscle, or just improve your overall health and wellness, I am here to support you with tailored exercises, nutrition and recovery plans and tips. Let's get started by discussing your goals and how I can help you achieve them.");
    const [counter, setCounter] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [initial, setInitial] = useState(true)

    useEffect(() => {
        setIsAnimating(true);
        setInitial(false)
    },[]);

    useEffect(() => {
        if (!initial){
           setOutput(text)
           setCounter(0)
           setIsAnimating(true) 
        }
        // eslint-disable-next-line
    },[text]);

    useEffect(() => {
        if(isAnimating) {
            if(counter < output.length){
              setTimeout(() => {
                  setCounter(counter + 1);
              }, 15);
            } else {
              setIsAnimating(false);
            }
          }
    }, [counter, isAnimating, output]);

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
      
            setOutput(data.result)
            setIsAnimating(true)
          } catch(error) {
            // Consider implementing your own error handling logic here
            console.error(error);
            alert(error.message);
          }
    }
      

    return ( 
        <div>
            <div className="output">
                <p className="typed">
                    {output.substring(0, counter)}
                </p>
                <button onClick = {() => generate()}> Generate </button>
            </div>
        </div>
     );
}



 
export default Output;