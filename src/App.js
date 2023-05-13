import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import NavScroll from "./PagesSections/NavBar.js";
import ScrollToTop from "./PagesSections/ScrollToTop.js";
import Footer from "./PagesSections/Footer.js";
import axios from 'axios';
import NotFound from "./Pages/NotFound.js";



function App() {
 const [info, SetInfo] = useState([])
 const [bannerInfo, SetBannerInfo] = useState([])
 

  const getRandomNumber = (max) => {
  let randomNumber = Math.floor(Math.random() * max)
  return randomNumber
  } 

 

 useEffect (()=>{
  const fetchInfo = async () => {
    try {
        const response = await axios.get('http://localhost:3000/posts')
        SetInfo(response.data)
    } catch (error){
        console.log(error)
    }

  }
  fetchInfo()
 },[])

 useEffect(()=> {
  const getBannerInfo = () => {
    if (info.length > 0) {
    let newBannerInfo = [];
    let i = 3;
    while (i > 0) { 
      let index = getRandomNumber(info.length-1)
      newBannerInfo.push(info[index])
      i--;
    }
    SetBannerInfo(newBannerInfo)
  }
  }
  getBannerInfo()
  const bands = info.map((band) => band.name)
 },[info])
 
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <NavScroll info = {info}/>
    <Routes>
      <Route path="/" element={<HomePage bannerInfo={bannerInfo} filterHome={""} artists={info} getRandomNumber={getRandomNumber} />}/>
      <Route path="/girls-group" element={<HomePage bannerInfo={info} filterHome={"Girl Group"} artists={info} getRandomNumber={getRandomNumber}/>}/>
      <Route path="/boys-band" element={<HomePage bannerInfo={info} filterHome={"Boy Band"} artists={info} getRandomNumber={getRandomNumber}/>}/>
      <Route path="/soloists" element={<HomePage bannerInfo={info} filterHome={"Soloist"} artists={info} getRandomNumber={getRandomNumber}/>}/>
      <Route path="/artist/:id" element={<Profile />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    );
}

export default App;
