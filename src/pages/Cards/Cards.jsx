import data from "../../Card.json";
import { useState } from "react";
export default function Cards() {
  const [count, setCount] = useState(0);

  function handleNext() {
    if (count > 11) {
      setCount(0);
    }
    setCount((prevCount) => prevCount + 1);
  }

  function handlePrev() {
    if (count < 1) {
      setCount(12);
    }
    setCount((prevCount) => prevCount - 1);
    console.log(count);
  }

  return (
    <div className="card">
      <button onClick={handleNext}>Следующий</button>
      <div>
        <h2 className="title">{data[count].title}</h2>
        <p className="body">{data[count].body}</p>
      </div>
      <button onClick={handlePrev}>Предыдущий</button>
    </div>
  );
}
