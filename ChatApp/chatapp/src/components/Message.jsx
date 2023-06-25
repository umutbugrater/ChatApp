import React from "react";
import {auth} from '../firebase'

const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name:`absolute mt-[-4rem] text-gray-600 text-xs`,
    sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received:`bg-[#98AFC7] text-black float-left rounded-br-full`
}

const Message = ({message}) => {

    //Mesajı gönderen kişi oturum açıp açmamasına göre css'ler değişiyor mesajın uid'si curreent user'ın uid'sine eşitse ona göre css veriyor 
    //değilse farklı bir css kullanıyor.
    const messageClass=
    message.uid===auth.currentUser.uid?`${style.sent}`:`${style.received}`
    return (
        <div>
            <div className={`${style.message} ${messageClass}`}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}
export default Message