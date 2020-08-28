import React from 'react';

function Types(props){
    const {change} = props;
    
   
    return(
        <div className = "types container" onChange = {change}>
            <select id = "category">
                <option value = "topstories">Categories...</option>
                <option value = "askstories">Ask stories</option>
                <option value = "showstories">Show stories</option>
                <option value = "jobstories">Job stories</option>
            </select>
            <select id = "stories">
                <option value = "topstories">Top stories</option>
                <option value = "newstories">New stories</option>
                <option value = "beststories">Best stories</option>
            </select>
        </div>
    )
}

export default Types;