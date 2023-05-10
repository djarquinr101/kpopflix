import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  
  &:hover{
    text-decoration: none;
    color: white;
   }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: black;
  gap: 1rem;
  padding: 2rem;
`

const StyledCard = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 300px;

`

const StyledImg = styled(Card.Img)`
    border-radius: 100px;
    max-width: 100px;
    max-height: 100px;
    margin: 10px;
`

const ArtistGrid = ({artists, filterNav}) => { 
    let filterArtist = []
    if (filterNav != '') {
        filterArtist = artists.filter(artist => artist.type == filterNav)
    } else {
        filterArtist = artists
    }        
       
    return(
    <StyledContainer>
     {filterArtist.map((artist,index) => (
         <StyledCard  key={index}>
             <StyledImg variant="top"src={artist.profile}/>
                 <Card.Body>
                  <Card.Title>{artist.name}</Card.Title>
                  <Card.Text>{artist.type}</Card.Text>
                  <Button variant="dark"><StyledLink to={`/${artist.id}`}>Listen Now</StyledLink></Button>
                 </Card.Body>
             </StyledCard>
              ))} 
            </StyledContainer>)
        
        }


export default ArtistGrid