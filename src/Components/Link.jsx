import React from 'react';

const Link=({className,href,children})=>{
    
    const onClick=(event)=>{
        if(event.metaKey || event.ctrlKey){
            return;

        }
        
        
        //we made this because we donot want to full reload page and get all the chunks again
        event.preventDefault();
        //display the correct url in addressbar 
        window.history.pushState({},'',href);
        //navigate Event
        const navEvent= new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

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