import { useEffect, useState } from 'react'

function Message({ size, featherCount }) {

    const [message, setMessage] = useState('')

    useEffect(() => {
        if (featherCount <= 0)
            setMessage('Oh my! No Feathers');
        else if (featherCount >= 10) {
            setMessage('Lookin Good!');
        } else {
            setMessage('More Feathers!');
        }
    }, [featherCount])

    return (
        <div className={`message ${size}`}>
            {message}
        </div>
    );
};

export default Message;

