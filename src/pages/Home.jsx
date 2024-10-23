
import { useEffect, useState } from "react";
import Ad from "../Components/UI/Ad";
import Hero from "../Components/UI/Hero";
import Slider1 from "../Components/UI/Slider1";
import CardItem from "../Components/UI/CardItem";
import {Skeleton} from 'primereact/skeleton';
import axios from 'axios';


const Home = () =>{
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const skeletonCards = Array(6).fill(0);


    useEffect(() => {
        const fetchcardData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/c/8a4f-2dbe-46bc-a18e'); // Adjust the endpoint as necessary
                setCardData(response.data);
                console.log('Card data:', response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchcardData(); 
    }, []);

    const SkeletonCard = () => (
        <div className="max-w-sm mx-auto">
            <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <Skeleton width="100%" height="320px" className="bg-slate-700" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent text-white p-4 min-h-[100px] flex justify-between items-center opacity-100">
                    <Skeleton width="70%" height="1.5rem" className="bg-slate-400" />
                    <div className="flex">
                        <Skeleton width="30px" height="30px" className="bg-slate-400 rounded-full mr-2" />
                        <Skeleton width="30px" height="30px" className="bg-slate-400 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-transparent mt-0 animate-pulse">
                <div className="flex items-center">
                    <Skeleton width="24px" height="24px" className="bg-slate-400 rounded-full" />
                    <Skeleton width="60px" height="1.2rem" className="ml-2 bg-slate-400" />
                    <Skeleton width="50px" height="1rem" className="ml-2 bg-slate-300" />
                </div>
                <div className="flex items-center">
                    <Skeleton width="20px" height="20px" className="bg-slate-400 rounded-full mr-1" />
                    <Skeleton width="30px" height="1rem" className="bg-slate-400" />
                    <Skeleton width="20px" height="20px" className="bg-slate-400 rounded-full ml-4 mr-1" />
                    <Skeleton width="30px" height="1rem" className="bg-slate-400" />
                </div>
            </div>
        </div>
    );
    
    
    return ( 
        <>
            <Hero/>
            <Slider1 />
            <div className="mb-40">
            <h1 className="pt-24 pb-12 text-[50px] text-center">Explore inspiring designs</h1>
            <div className="container mx-auto p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {loading ?
                    skeletonCards.map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                :
                    cardData?.slice(0, 6).map((card, index) => (
                        <CardItem key={index} cardData={card} />
                    ))
                }
                </div>
            </div>
        </div>
            <Ad/>
        </>
    );
};

export default Home;
