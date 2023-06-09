import CarouselFade from "../PagesSections/Header";
import ArtistGrid from "../PagesSections/ArtistGrid";

const HomePage =  ({handleClick, bannerInfo, filterHome, artists, getRandomNumber, getProfile}) => {
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
        <CarouselFade banners={newBannerInfo}/>
        <ArtistGrid artists={artists} filterNav ={filterHome} />
        </>
    )
}

export default HomePage;