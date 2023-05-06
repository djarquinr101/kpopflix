import NavScroll from "../PagesSections/NavBar";
import CarouselFade from "../PagesSections/Header";
import ArtistGrid from "../PagesSections/ArtistGrid";

const HomePage =  ({handleClick, bannerInfo, filterHome, artists, getRandomNumber}) => {
    let newBannerInfo = []
    if (filterHome != '' ) {
        let filteredBannerInfo = bannerInfo.filter((banner) => banner.type == filterHome)
        let i = 3;
        while (i > 0) { 
      let index = getRandomNumber(filteredBannerInfo.length-1)
      newBannerInfo.push(filteredBannerInfo[index])
      i--;
    }
    } else {
        newBannerInfo = bannerInfo
    }

    return (
        <>
        <NavScroll/>
        <CarouselFade banners={newBannerInfo}/>
        <ArtistGrid artists={artists} filterNav ={filterHome}/>
        </>
    )
}

export default HomePage;