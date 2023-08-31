import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(30);
  // const [showTimer, setShowTimer] = useState(false);
  useEffect(() => {
    timer();
  }, [time]);

  const timer = () => {
    setTimeout(() => {
      if (time > 0) {
        const newTime = time - 1;
        setTime(newTime);
      }
    }, 1000);

    return;
  };

  return <>Resend {time}</>;
}
