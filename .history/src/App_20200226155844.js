import React, { useState } from 'react';
import Recaptcha  from 'react-recaptcha'

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
  return (
    <div>
      <h1>captcha</h1>
     <input type="text" placeholder="your email"></input>
     <button onClick={handlethis}>SUBSCIBE</button>
     
     <Recaptcha
    sitekey="6LcHZdwUAAAAABCGEp7thhuAnQvvK5ShoJS1MegZ"
    render="explicit"
    onloadCallback={recaptchaLoaded}
  />
    </div>
  )
}

export default App;
