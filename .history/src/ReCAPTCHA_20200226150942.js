import React from 'react';

function ReCAPTCHA() {
    const recaptchaRef = React.createRef();
    const onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
      }
    return (
        <div>
            <form onSubmit={onSubmit} >
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="Your client site key"
     
      />
    </form>
            
        </div>
    )
}

export default ReCAPTCHA;
