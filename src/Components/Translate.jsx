import React,{useEffect} from 'react';
import { useState } from 'react';

import Dropdown from './Dropdown';


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
    }
];

const Translate=()=>{

    const [selectedLanguage,setSelectedLanguage]=useState(options[0]);

    return(
        <div>
            <Dropdown label={"Select Language"}options={options} selected={selectedLanguage} onSelectedChange={setSelectedLanguage}/>
        </div>
    );

}

export default Translate;
