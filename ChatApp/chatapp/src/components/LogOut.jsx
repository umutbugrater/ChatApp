import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

//Google hesabıyla açtığımız oturumu 'logout' butonuna tıklanılmasıyla oturumu sonlandırıyor.
const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut