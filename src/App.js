import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import ContentCard from './components/ContentCard';
import Types from './components/Types';
import Posts from './components/Posts';
import './App.css';

const minData = (arr) => {

  return arr.filter((ele, index) => {
    return index < 20
  })
}

function App() {
  
  const [param,setParam] = useState("topstories")
  const [data, setData] = useState([]);
  const dataArray =[];
  

  const change = (e) => {
    var value = e.target.value;
    setParam(value); 
  }

  

  useEffect(() => {
    var dataId =[];
    const fetchData = async () => {

      const res = await fetch("https://hacker-news.firebaseio.com/v0/" + param + ".json");
      const jsonData = await res.json();
      dataId = [...jsonData];
      var optData  = minData(dataId);
      settingData(optData);
      setData(dataArray);
      
    }
    fetchData();
    
  }, [param]);



  const settingData = (items) => {
    items.forEach(ele => {
      dataArray.push({id : ele,show : false})
    })
  }



  const changeShow = (id) => {
    
    setData(data.map(ele => {
      if(ele.id != id){
        ele.show = true;
        return ele;
      }
      else{
        ele.show = false;
        return ele;

      }
    }))
  }


  return (
    <Router>
    <div className="main">
      
      <Header />
      
      <Route path = '/' exact component = {()=> <Types change = {change}/> }/>
      
      {data.map((item) => {
        return <Route path = '/'  component = {()=><ContentCard wholeData={item} key = {item.id} onclick = {changeShow}/> }/>
      })}
      <Route path = '/post/:id' exact component = {Posts}/>
     
    </div>
    </Router>
  )

}
export default App;
