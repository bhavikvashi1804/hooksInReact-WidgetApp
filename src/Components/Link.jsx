import React from 'react';

const Link=({className,href,children})=>{
    
    const onClick=(event)=>{
        //we made this because we donot want to full reload page and get all the chunks again
        event.preventDefault();
        window.history.pushState({},'',href);

    };

    return (
        <a 
        onClick={onClick}
        className={className} 
        href={href}>
            {children}
        </a>
    );
};

export default Link;