import { useState, useEffect } from "react";
import NavScroll from "./PagesSections/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFade from "./PagesSections/Header";
import axios from 'axios';



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
      console.log(index)
      newBannerInfo.push(info[index])
      i--;
    }
    SetBannerInfo(newBannerInfo)
  }
  }

  getBannerInfo()

 },[info])
 
  return (
    <>
    <NavScroll />
    <CarouselFade banners={bannerInfo}/>
    </>
    );
}

export default App;
