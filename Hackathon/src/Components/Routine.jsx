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
  let h = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Routine"));
      const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(dataArray);
      console.log(dataArray);
    };

    fetchData();
  }, []);

  const renderListForDay = (routine) => {
    switch (d) {
      case 0: return routine.Listsunday;
      case 1: return routine.Listmonday;
      case 2: return routine.Listtuesday;
      case 3: return routine.Listwednesday;
      case 4: return routine.Listthursday;
      case 5: return routine.Listfriday;
      case 6: return routine.Listsaturday;
      default: return [];
    }
  };

  return (
    <>
      <div style={{ width: '100svh', textAlign: 'left' }}>
        <p style={{ textAlign: 'right' }}>{day[d - 1]} {h}:{min < 10 ? `0${min}` : min} {ampm}</p>
        <h2 style={{ textAlign: 'center', fontSize: '64px' }}>Todays Challange</h2>
      </div>
      <ul className='listwork'>
        {data.map((routine) => (
          <li key={routine.id}>
            {renderListForDay(routine) && renderListForDay(routine).map((item, index) => (
              <div key={index} className='listy'>
                <input type="checkbox" id={`item-${index}`} />
                <label htmlFor={`item-${index}`}>{item}</label>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
}


export default Routine;