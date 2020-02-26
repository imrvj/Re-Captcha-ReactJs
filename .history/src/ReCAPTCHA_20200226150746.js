import React from 'react';

function ReCAPTCHA() {
    const recaptchaRef = React.createRef();
    onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
      }
    return (
        <div>
            
        </div>
    )
}

export default ReCAPTCHA;
