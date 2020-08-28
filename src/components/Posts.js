import React, { useState,useEffect } from 'react';
import Comments from './Comments';

function Posts({match}){
   
    
    const [data,setData] = useState([]);
    useEffect(
        ()=>{
            const fetchData = async () =>{
                const res = await fetch("https://hacker-news.firebaseio.com/v0/item/" + match.params.id + ".json");
                const jsonData = await res.json();
                var dataId = jsonData;
                console.log(dataId.kids)
                if(dataId.kids){
                var realData = await Promise.all (dataId.kids.map(async(element )=> {
                    var temp = await fetch("https://hacker-news.firebaseio.com/v0/item/" + element + ".json");
                    var rData = await temp.json();
                    return rData;
                }))
                }
                else{
                    realData = [];
                }
                setData(realData);

            }
            fetchData();

        },[match.params.id]
    )

    console.log(data);
    return(
        data.map(ele => {

            return <Comments data = {ele}/>
        })
        
    )   
}

export default Posts;