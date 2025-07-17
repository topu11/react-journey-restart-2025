import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);
  return (
    <>
      <p className="lead">
        এখন সময় ঃ {time.toLocaleDateString()} - {time.toLocaleTimeString()}
      </p>
    </>
  );
}
export default CurrentTime;
