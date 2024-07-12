import React, { useEffect, useRef, useState } from 'react'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../Config/Firebase';

function Chat() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [data, setData] = useState([]);
  const message = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Massanges"));
      const dataArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(dataArray);
    };

    fetchData();
  }, []);

  const handleMessage = async () => {
    const collectionName = 'Massanges'; 
    const documentId = 'QfIhEfnduflbefj09mSI';
    const newMessage = message.current.value;

    if (newMessage.trim() !== "") {
      const newField = {
        text: newMessage  
      };

      setData(prevData => [...prevData, { id: documentId, text: newMessage }]);
      handleSendMessage(collectionName, documentId, newField);
      
      message.current.value = "";  
    }
  };

const handleSendMessage = async (collectionName, documentId, newField) => {
  try {
    const documentRef = doc(db, collectionName, documentId);
    await updateDoc(documentRef, newField);
    messageLoad();
  } catch (error) {
    console.error('Error adding field: ', error);
  }
};

function messageLoad(){
  return data.map((msg) => (
    <React.Fragment key={msg.id}>
      <div style={{display:'flex', justifyContent: 'right'}}>
        <li className='message'>{msg.text}</li>
        <img src='\src\assets\image.png' width={'40px'} height={'40px'}/>
      </div>
    </React.Fragment>
  ));
}

  const d = currentTime.getDay();
  let h = currentTime.getHours();
  const min = currentTime.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const [day] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Ahad']);

  return (
    <>
    <div className='chatheader'>
      <h1>Helen</h1>
        <p style={{ textAlign: 'right' }}>{day[d - 1]} {h}:{min < 10 ? `0${min}` : min} {ampm}</p>
      </div>
      <div className='chatbox'>
        <ul className='listwork'>
          {messageLoad()}
        </ul>
      </div>
      <div style={{display:'flex'}}>
        <input type='text' className='InputMSG' placeholder='Enter message' ref={message}/>
        <input type='button' className='ClickMSG' value={'Send'} onClick={handleMessage}/> 
      </div>
    </>
  )
}

export default Chat