import React from 'react';


function Comments(props){
    const {by, text, time, deleted} = props.data;
    if(!deleted){
        return(

            <div className = "container">
            <div className = "posts card">
                <div className = "post-author">
                    <h5>{by}</h5>
                </div>
                <div className = "post-content">
                    <h4 className="light-weight"> {text}</h4>
                </div>
                <div className = "time">
                    <h6 className="light-weight"><i></i>{new Date(time).toLocaleTimeString("en-us")}</h6>
                </div>
            </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    
}

export default Comments;