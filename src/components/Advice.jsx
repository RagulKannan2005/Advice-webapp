import { useEffect, useState } from "react";
import "./css/Advice.css"
const Advice = () => {
  const [advice, setAdvice] = useState("Please click the button to get advice");
  const [count, setCount] = useState(0);
  async function getadvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getadvice();
  }, []);
  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getadvice}>Get Advice </button>
      <Counter count={count}/>
    </div>
  );
};
function Counter(props) {
  return(
    <p>
        You Have Read <b>{props.count} </b>Piece Of ADVICE
      </p>
  )
}

export default Advice;
