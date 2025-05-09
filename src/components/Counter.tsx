import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>カウントは: {count}</p>
      <button onClick={handleClick}>Count up</button>
    </div>
  );
}

export default Counter;