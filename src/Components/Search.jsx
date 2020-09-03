import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, updateTerm] = useState("");
    const [results,setResults]=useState([]);

    console.log(results);

    useEffect(
        () => {
            const searchTerm=async ()=>{
                const {data}=await axios.get(
                    'https://en.wikipedia.org/w/api.php',
                    {
                        params:{
                            action:'query',
                            list:'search',
                            origin:'*',
                            format:'json',
                            srsearch:term,
                        }
                    }
                );

                setResults(data);
            };

            if(term){
                searchTerm();
            }
            
        },
        [term]
    );

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => updateTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;