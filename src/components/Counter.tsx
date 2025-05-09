import { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const countUp = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useEffect_1
  useEffect(() => {
    console.log("再レンダリングされる度に実行");
  });
  // useEffect_2
  useEffect(() => {
    console.log("初回レンダリング時に実行");
  }, []);
  // useEffect_3
  useEffect(() => {
    console.log("countが変更された時に実行");
  }, [count]);

  return (
    <>
      {console.log("---レンダリング---")}

      <div>
        <p>カウントは: {count}</p>
        <button onClick={countUp}>Count up</button>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"} Modal
        </button>
      </div>
    </>
  );
}

export default Counter;