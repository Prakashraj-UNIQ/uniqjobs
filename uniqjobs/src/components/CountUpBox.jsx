import React, { useEffect, useState } from "react";

const CountUpBox = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(value / (duration / 30)); // change 30 for speed
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 30); // update every 30ms

    return () => clearInterval(interval); // cleanup
  }, [value]);

  return (
    <div className="text-center">
      <div className="font-primary font-bold text-lg">
        {count.toLocaleString()}+
      </div>
      <div>{label}</div>
    </div>
  );
};

export default CountUpBox;
