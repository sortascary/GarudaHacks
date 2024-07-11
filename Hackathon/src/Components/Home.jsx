import React, { useState, useEffect } from 'react'

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const d = currentTime.getDay();
  const h = currentTime.getHours();
  const min = currentTime.getMinutes();
  const [day] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Ahad' ]);

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Home</h1>
    <div style={{width: '500px', textAlign: 'left'}}>
    <p>{day[d - 1]} {h}:{min}</p>
    </div>
    </>
  )
}

export default Home