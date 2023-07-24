import React from 'react';

const button = {
    buttonText: '',
    buttonClass: 'btn ',
    buttonType: '',
    href: ''
}

type buttonProps = {
    Class: string,
    Message: string,
    Value: string,
    Type: string,
    href: string
}

const Button = ({Class, Message, Value, Type, href}:buttonProps) => {
    let buttonClass = button.buttonClass;
    if(Class) {
        buttonClass = buttonClass + 'btn-' + Class;
    }
    let buttonText = button.buttonText;
    if(Message) {
        buttonText = button.buttonText + Message;
    }
    let content = <button type="button" className={buttonClass}>{buttonText}</button>;

    if (!Type) {
        let href_txt = button.href + href;
        content = <a className={buttonClass} href={href_txt} role="button">{buttonText}</a>
    }
    if (Value) {
        content = <input className={buttonClass} type={Type} value={Value}/>;
    }
    return (
        <>{content}</>
    );
};

export default Button;