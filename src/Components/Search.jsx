import React,{useState} from 'react';
import { useEffect } from 'react';

const Search=()=>{
    const [term,updateTerm]=useState("");

    useEffect(
        ()=>{
            console.log('I run after every render also for initial render');
        },
    );

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input 
                    className="input" 
                    value={term}
                    onChange={e=>updateTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;