import React,{useState} from 'react';
import { useEffect } from 'react';

const Search=()=>{
    const [term,updateTerm]=useState("");
    const [term1,updateTerm1]=useState("");

    useEffect(
        ()=>{
            console.log('I at initial render & when my array value changes');
        },
        [term,term1]
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