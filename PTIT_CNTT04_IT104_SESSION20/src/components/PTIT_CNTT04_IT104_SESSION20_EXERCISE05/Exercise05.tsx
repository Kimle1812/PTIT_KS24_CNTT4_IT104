import React, { useState, useEffect } from "react";

export default function Exercise05() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}
