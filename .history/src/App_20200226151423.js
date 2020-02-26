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
     
    </div>
  );
}

export default App;
