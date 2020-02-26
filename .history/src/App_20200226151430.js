import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReCAPTCHA from './ReCAPTCHA';
const recaptchaRef = React.createRef();

function App() {
  onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }
  return (
    <div className="App">
       <form onSubmit={this.onSubmit} >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="Your client site key"
        onChange={onChange}
      />
    </form>
    </div>
  );
}

export default App;
