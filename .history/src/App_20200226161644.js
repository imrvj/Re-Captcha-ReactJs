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
      <h2>Verify Captcha</h2>
     <input type="email" placeholder="Your Email ID"></input>
     <button className="waves-effect waves-light btn"onClick={handlethis}>SUBSCIBE</button>
     <br></br>
     <br></br>
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
