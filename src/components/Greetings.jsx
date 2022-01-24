import React from 'react';

const Greetings = (props) => {

    let salutation ='';

    switch(props.lang) {
        case 'de':
            salutation = 'Hallo';
        break;
        case 'es':
            salutation = 'Ola';
        break;
        case 'fr':
            salutation = 'Bonjour';
        break;
        case 'en':
            salutation = 'Hello'
        break;
        default:
            salutation = 'Hello';
        break;
    }

    return (
    <div className='greeting'>
    <p>{salutation} {props.children}</p>
    </div>
    )
}

export default Greetings