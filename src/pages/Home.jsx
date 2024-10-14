import Ad from "../Components/UI/Ad";
import Hero from "../Components/UI/Hero";
import Slider1 from "../Components/UI/Slider1";
import CardItem from "../Components/UI/CardItem";
import cardData from "../Components/assets/cards3";

const Home = () =>{
    return ( 
        <>
            <Hero/>
            <Slider1 />
            <div className="mb-40">
            <h1 className="pt-24 pb-12 text-[50px] text-center">Explore inspiring designs</h1>
            <div className="container mx-auto p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cardData.slice(0, 6).map((cardData) => (
                    <CardItem key={cardData.id} item={cardData} />
                ))}
                </div>
            </div>
        </div>
            <Ad/>
        </>
    );
};

export default Home;
