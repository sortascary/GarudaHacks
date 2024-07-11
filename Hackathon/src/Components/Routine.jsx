import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Config/Firebase';

function Routine() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Ahad' ]);
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

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Routine"));
      const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(dataArray);
      console.log(dataArray);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Routine</h1>
      <div style={{ width: '500px', textAlign: 'left' }}>
        <p>{day[d - 1]} {h}:{min}</p>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Routine;