import React from 'react';

const Accordion=({items})=>{

    const onTitleClicked=(index)=>{
        console.log('Title clicked at',index);
    };

    const renderedItem=items.map(
        (item,index)=>{
            return (
                <React.Fragment key={item.title}>
                    <div className="title active" onClick={()=>onTitleClicked(index)}>
                        {/* if we directly use onClick=onTitleClicked then it automatically clicked all the element */}
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="content active">
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            );
        }
    );

    return (
        <div className="ui styled accordion" >
             {renderedItem}
        </div>
    );

};

export default Accordion;