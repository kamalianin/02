import React from 'react';

const alert = {
    alertMessage: '',
    alertClass: 'alert ',
}

type alertProps = {
    Class: string,
    Message: string
}

const Alert = ({Class, Message}:alertProps) => {
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