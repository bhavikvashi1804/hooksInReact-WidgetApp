import React,{ useState } from 'react';


import Dropdown from './Dropdown';
import Convert from './Convert';

const options=[
    {
        label:'Afrikaans',
        value:'af',
    },
    {
        label:'Arbic',
        value:'ar',
    },
    {
        label:'Hindi',
        value:'hi',
    },
    {
        label:'Dutch',
        value:'nl',
    },
];

const Translate=()=>{

    const [selectedLanguage,setSelectedLanguage]=useState(options[0]);
    const [text,setText]=useState('');

    return(
        <div>
            <div className="ui form">
                <div className="form field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            
            <Dropdown label={"Select Language"}options={options} selected={selectedLanguage} onSelectedChange={setSelectedLanguage}/>
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={selectedLanguage} />
        </div>
    );

}

export default Translate;
