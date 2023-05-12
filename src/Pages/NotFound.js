import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const StyledImg = styled.img`
    border-radius: 100px;
    max-width: 100px;
    max-height: 100px;
    margin: 10px;
`

const NotFound = () => {
    
    const photoList = [
        "https://i.pinimg.com/736x/ed/27/b4/ed27b436d1fcb9657149892ce9859f9d.jpg",
        "https://sticker-collection.com/stickers/plain/Auraasabar/512/ad021e7b-0675-4f4b-b480-f0a58f34d84afile_3466729.webp",
        "https://i.pinimg.com/originals/0b/e4/5b/0be45b8b8b8df759da45283e2df992ef.jpg"
        ]
    
    const randomImage = photoList[Math.floor(Math.random() * photoList.length)]


    return (
        <StyledContainer>
            <StyledImg  src={randomImage}/>
            <StyledContainer>
                <h1>Page not Found</h1>
                <p>We don't know how you got here, but you can go back to the homepage <Link to ="/">here</Link></p>
            </StyledContainer>
        </StyledContainer>    
        )
    }

    export default NotFound;