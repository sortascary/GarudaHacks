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
  let h = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const [day] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Ahad' ]);

  return (
    <>
    <div style={{width: '100svh', textAlign: 'left'}}>
    <p style={{ textAlign: 'right' }}>{day[d - 1]} {h}:{min < 10 ? `0${min}` : min} {ampm}</p>
    </div>
    </>
  )
}

export default Home