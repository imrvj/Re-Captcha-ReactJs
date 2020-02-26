import React from 'react';
import Recaptcha  from 'react-recaptcha'

function App() {

  const handlethis=()=>
  {
    console.log("handler")
  }
  return (
    <div>
      <h1>captcha</h1>
     <input type="text" placeholder="your email"></input>
     <button onClick={handlethis}>SUBSCIBE</button>
     
    </div>
  )
}

export default App;
