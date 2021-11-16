import React, { useRef, useEffect } from "react";
import Message from "./Message"
import FlipMove from 'react-flip-move';

const Section = ({ messages }) => {
    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView({ behavior: "smooth" }));
        return <span ref={elementRef} />;
    };

    return (
        <div className="container">
            <ul className="messages-list">
                <FlipMove duration={300} easing="ease">
                    {messages.map(message => (
                        <Message key={message.id} message={message} />
                    ))}
                </FlipMove>
                <AlwaysScrollToBottom />
            </ul>
        </div>
    )
}

export default Section;