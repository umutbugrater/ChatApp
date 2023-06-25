import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from 'react-google-button'
import { auth } from "../firebase";
const style={
    wrapper:`flex justify-center`
}

//
const googleSignIn= () => {
    const provider=new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}

//Google hesabıyla giriş yapabilmemiz için bir google simgesine sahip  buton'a tıklandığında google hesaplarıyla oturum açmamızı sağlıyor!
const SignIn = () => {
    return (
        <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}>

        </GoogleButton>
        </div>
        
    )
}
export default SignIn