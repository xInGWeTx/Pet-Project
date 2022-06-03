import './App.css';
import Home from './Home'
import Breed from './Breeds'
import Gallery from './Gallery'
import Voting from './Voting'
import Search from './Search'
import Like from './Like'
import Dis from './Dis'
import Fav from './Favourite'
import Mains from'./Main'
import Upload from'./Upload'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App(){ 
    const [q,setq]=useState("");
    const [response,setresponse]=useState([]);
    let navigate = useNavigate();
     function search(){
        let url=`https://api.thedogapi.com/v1/breeds/search?q=${q.q}`
        fetch(url,{
            method:"GET",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Access-Conrol-Allow-Headers":"Origin, X-Requested-With,Content-Type,Accept",
                "x-api-key":"02d4aaa8-cc49-4be1-8531-143718f2c253"
            }
        })
        .then(response =>response.json())
                .then(response => {
                  setresponse(response)
                })
                
    }
    function handleChange(e) {
        setq({q: e.target.value });
    }
    function handleSubmit(e){
        e.preventDefault()
        search()
        
        navigate(`/search`);
        
    }
  
  return (
    <div className="home"> 
  
  <Home/>
    <Routes>
        <Route path="/voting"  element={<Voting search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/fav" element={<Fav search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/dis" element={<Dis search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/like" element={<Like search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/breed" element={<Breed search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/gallery" element={<Gallery search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
        <Route path="/search" element={<Search search={search} handleChange={handleChange} handleSubmit={handleSubmit} response={response}/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/" element={<Mains/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
