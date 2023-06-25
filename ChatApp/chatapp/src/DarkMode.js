import {useEffect,useState} from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState("light-theme")
    const[state,setState] = useState(false)


    //toggleTheme fonkisyonu link'e tıklanıldğında çalışıyor ve temayı değiştiriyor.Hem de linkte yazılı metni değiştirmemizi sağlıyor.
    const toggleTheme = () =>{ 
        theme == "dark-theme"?  setTheme('light-theme'):setTheme('dark-theme')
        setState(!state)
    }

    useEffect(()=>{
        document.body.className=theme;
    },[theme]);

    return (
      <>
        <a href="#" className="btn" onClick = {() =>toggleTheme()}> {state ? 'Aydınlık' : 'Karanlık'}</a>
      </>
    )
  }
  
  export default DarkMode
  