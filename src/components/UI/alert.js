import React from 'react';

const alert = {
    alertMessage: '',
    alertClass: 'alert ',
}

const Alert = ({Class, Message}) => {
    let ClassText = ''
    if (Class) {
        ClassText = 'alert-' + Class;
    }
    let className = alert.alertClass + ClassText;
    let alertMessage =  alert.alertMessage
    if (Message) {
        alertMessage += Message;
    }
    return (
        <div className={className} role="alert">
            {alertMessage}
        </div>

    );
};

export default Alert;