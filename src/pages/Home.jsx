import Ad from "../Components/UI/Ad";
import Hero from "../Components/UI/Hero";
import Slider1 from "../Components/UI/Slider1";
import CardListing from "./CardsListing";

const Home = () =>{
    return ( 
        <>
            <Hero/>
            <Slider1 />
            <CardListing />
            <Ad/>
        </>
    );
};

export default Home;
