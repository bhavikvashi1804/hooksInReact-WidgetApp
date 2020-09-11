import React from 'react';
import { useEffect } from 'react';


//API_Key="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert=({language,text})=>{

    useEffect(()=>{
        console.log("New Language or text");
    },[language,text]);

    return (
        <div>
            
        </div>
    );

}

export default Convert;
