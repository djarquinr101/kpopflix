import { useState, useEffect } from "react";
import NavScroll from "./PagesSections/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselFade from "./PagesSections/Header";
import axios from 'axios'



function App() {
 const [info, Setinfo] = useState([])
 
 useEffect (()=>{
  const fetchInfo = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/v1/info')
        console.log(data)
    } catch (error){
        console.log(error)
    }
}
 },[])
 
  return (
    <>
    <NavScroll />
    <CarouselFade />
    </>
    );
}

export default App;
