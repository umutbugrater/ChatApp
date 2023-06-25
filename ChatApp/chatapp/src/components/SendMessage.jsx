import React, { useState } from 'react';
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'


const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');
  //Eğer bir mesaj gönderilmezse alert çıkıcak
  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
      alert('Lütfen Mesaj Gönderin')
      return
    }
    //Veri tabanına ulaşıp mesajın içerğine ve gönderen bilgilerine ulaşıyor
    const { uid, displayName } = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    //gönderdikten sonra temizleme işlemi
    setInput('')
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <form onSubmit={sendMessage} className={style.form}>
    <input value={input} 
    onChange={(e)=>setInput(e.target.value)}
    className={style.input} type="text" placeholder='Message'></input>
    <button className={style.button} type="submit">Gönder</button>

    </form>
)
}
export default SendMessage;

  //

 

  




  
  


