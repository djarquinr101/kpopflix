import ImgOverlay from "../PagesSections/ProfileBanner";
import VideoPlayer from "../PagesSections/VideoPlayer";
import InfoBio from "../PagesSections/BioInfo";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const Profile = () => {
    const [profileData, setProfileData] = useState([])
    const {id} = useParams()   
    const nagivate = useNavigate()
    
    const errorHandler = (error) => {
        if (error.response && error.response.status ===404) {
         nagivate("/Not-Found")    
    } 
    }
   

   useEffect(()=> {  
    const getProfile = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            setProfileData(response.data)
        } catch (error){
            console.log(error)
            errorHandler(error)
        }
      }
      getProfile(id)
    },[])

    return (
        <>
       <ImgOverlay banner={profileData.banner} name={profileData.name} info={profileData.info} profile={profileData.profile}/> 
       <InfoBio name={profileData.name} infopart1={profileData.infopart1} infopart2={profileData.infopart2}/>
        <VideoPlayer id={profileData.id}/>
        </>
    )

}

export default Profile;


