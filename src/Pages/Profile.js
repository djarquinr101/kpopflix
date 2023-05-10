import ImgOverlay from "../PagesSections/ProfileBanner";
import VideoPlayer from "../PagesSections/VideoPlayer";
import InfoBio from "../PagesSections/BioInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [profileData, setProfileData] = useState([])
    const {id} = useParams()   
   

   useEffect(()=> {  
    const getProfile = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            setProfileData(response.data)
        } catch (error){
            console.log(error)
        }
      }
      getProfile(id)
    },[])

    return (
        <>
       <ImgOverlay banner={profileData.banner} name={profileData.name} info={profileData.info}/> 
       <InfoBio name={profileData.name} infopart1={profileData.infopart1} infopart2={profileData.infopart2}/>
        <VideoPlayer id={profileData.id}/>
        </>
    )

}

export default Profile;


