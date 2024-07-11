import React, { useState } from 'react'

function Home() {

  const n =  new Date();
  const d = n.getDay();
  const [day, setDay] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Ahad' ]);

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Home</h1>
    <div style={{width: '300px', textAlign: 'left'}}>
    <p>{day[d - 1]}</p>
    </div>
    </>
  )
}

export default Home