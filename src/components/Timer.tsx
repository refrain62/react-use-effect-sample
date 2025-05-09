import { useEffect, useState } from "react";

const Timer: React.FC<{
  setIsDisplay: (value: React.SetStateAction<boolean>) => void;
}> = ({ setIsDisplay }) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("再レンダー");
    if (count < 0) {
      setIsDisplay(false);
      return;
    }

    const doInterval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("クリーンアップ");
      clearInterval(doInterval);
    };
  }, [count, setIsDisplay]);

  return (
    <p>{count}秒後にunMountします</p>
  );
};

export default Timer;