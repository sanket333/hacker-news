import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ContentCard({wholeData, onclick}) {
    var { id, show } = wholeData;
    const [item, setItem] = useState({});

    

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json");
            const jsonId = await res.json();
            setItem(jsonId);
        }
        fetchData();
       
    }
        , [id])

        

    if (item && !show) {
        return (

            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <h3 onClick = {()=>onclick(item.id)}>
                            <Link className = "links" to = {`/post/${item.id}`}>{item.title}</Link>
                        </h3>
                    </div>

                    <div className="card-author">
                        <h5 className="light-weight"><i>-</i>{item.by}</h5>
                    </div>

                    <div className="card-kids">
                        <ul className="kid-container">
                            <li><h6 className="light-weight"><i></i>{new Date(item.time).toLocaleDateString("en-us")}</h6></li>
                            <li><h6 className="light-weight"><i>{item.score}</i>stars</h6></li>
                            <li><h6 className="light-weight"><i>{item.kids ? item.kids.length : 0}</i>comments</h6></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }



}

export default ContentCard;