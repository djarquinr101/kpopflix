import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    max-height: 80%;

`

const StyledImg = styled.img`
   border-radius: 200px;
    max-width: 250px;
    max-height: 250px;
`

const NotFound = () => {
    const nagivate = useNavigate()
    
    const photoList = [
        "https://i.pinimg.com/736x/ed/27/b4/ed27b436d1fcb9657149892ce9859f9d.jpg",
        "https://sticker-collection.com/stickers/plain/Auraasabar/512/ad021e7b-0675-4f4b-b480-f0a58f34d84afile_3466729.webp",
        "https://i.pinimg.com/originals/0b/e4/5b/0be45b8b8b8df759da45283e2df992ef.jpg"
        ]
    
    const randomImage = photoList[Math.floor(Math.random() * photoList.length)]

    
    useEffect(()=> {
       setTimeout(()=> {nagivate("/")}, 6000) 
    }, [])

    return (
        <StyledContainer>
            <StyledImg  src={randomImage}/>
            <StyledContainer>
                <h1>Page not Found</h1>
                <p>We don't know how you got here, but you will be taken to the Homepage soon, Bye!! </p>
            </StyledContainer>
        </StyledContainer>    
        )
    }

    export default NotFound;