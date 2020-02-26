import React from 'react';

function App() {
  return (
    <div>
       <form action="?" method="POST">
          <div className="g-recaptcha" data-sitekey="your_site_key" />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
    </div>
  )
}

export default App;
