import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Message from "./Message";
import { db } from '../firebase';
import { query, orderBy } from 'firebase/firestore';
import SendMessage from "./SendMessage";

const style =
{
    main: `flex flex-col p-[10px] relative`
}

//
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    //Firebasedeki messages koleksiyonuna bakıyor zaman damgasına göre sıralama işlemini yapıyor.
    //messages dizisinin içine koleksiyondaki mesajları aktarıyor.
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc)=>{
                messages.push({...doc.data(),id:doc.id});
            })           
            setMessages(messages);
        });
        return () => unsubscribe();
    }, []);
    return (
        <>
            <main className={style.main}>
                {messages && messages.map((message)=>(
                     <Message key={message.id} message={message}/>
                ))}              
            </main>           
            <SendMessage scroll={scroll}></SendMessage>
            <span ref={scroll}>
            </span>
        </>
    )
}
export default Chat