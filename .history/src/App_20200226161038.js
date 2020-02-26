import React, { useState } from 'react';
import Recaptcha  from 'react-recaptcha'
import './App.css'

function App() {

  const [isVerified, setisVerified] = useState(false)
  const handlethis=()=>
  {
    if(isVerified)
    {
      alert('Verified')
    }
    else{
      alert("Please Verify first That Your Are a Human")
    }
  }

  const recaptchaLoaded=()=>
  {
    console.log("Captch is reloaded")
  }

  const verifyCallback=(response)=>
  {
    if(response)
    {
      setisVerified(true)
    }
  }
  return (
    <div className="Box">
      <h1>captcha</h1>
     <input type="text" placeholder="your email"></input>
     <button onClick={handlethis}>SUBSCIBE</button>
     
     <Recaptcha
    sitekey="6LdUadwUAAAAAPPaHThKNNVtwNz9kwSf7Jc57aY4"
    render="explicit"
    verifyCallback={verifyCallback}
    onloadCallback={recaptchaLoaded}
  />
    </div>
  )
}

export default App;
