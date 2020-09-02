import React,{useState} from 'react';

const Accordion=({items})=>{
   
    const [activeIndex,updateActiveIndex]=useState(null);


    const onTitleClicked=(index)=>{
        console.log('Title clicked at',index);
        updateActiveIndex(index);
    };

    const renderedItem=items.map(
        (item,index)=>{
            const active = index===activeIndex?'active':'';
            return (
                <React.Fragment key={item.title}>
                    <div className={`title ${active}`} onClick={()=>onTitleClicked(index)}>
                        {/* if we directly use onClick=onTitleClicked then it automatically clicked all the element */}
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
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