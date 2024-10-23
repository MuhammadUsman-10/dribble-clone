import {useState, useEffect} from "react";
import {Skeleton} from 'primereact/skeleton';
// import {cardService} from "../assets/card.js";
import { Carousel } from 'primereact/carousel';
import axios from 'axios';

const CardSlider1 = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const responsiveOptions = [
        {
            breakpoint: '2560px',
            numVisible: 6,
            numScroll: 1
        },
        {
            breakpoint: '2000px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1440px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1280px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '640px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const fetchcardData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/c/ef42-f1d1-476c-9f9d'); // Adjust the endpoint as necessary
                setCards(response.data);
                console.log('Card data:', response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchcardData();
    }, []);

    const CardTemplate = (card) => {
    return (
            <div className="max-w-sm mx-auto ">
                <div className="relative bg-gray-800 rounded-[30px] overflow-hidden sm:m-4 md:m-4 lg:m-3">
                    <img src={card.image} alt={card.title} className=" w-96 h-96 object-cover cursor-pointer opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 text-white p-4 justify-between items-center">
                        <h2 className="text-sm sm:text-md md:text-lg">{card.name}</h2>
                        <h2 className="text-xs sm:text-sm md:text-md">{card.title}</h2>
                        <div className="flex">
                        <p className="text-xs my-1 mr-2 border-[1px] rounded-2xl py-1 px-2">{card.work1}</p>
                        <p className="text-xs my-1 mr-2 border-[1px] rounded-2xl py-1 px-2">{card.work2}</p>
                        <p className="text-xs my-1 border-[1px] rounded-2xl py-1 px-2">{card.work3}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const LoadingTemplate = () => {
        const skeletonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const skeletonCardTemplate = () => (
            <div className="max-w-sm mx-auto ">
                <div className="animate-pulse relative bg-gray-800 rounded-[30px] overflow-hidden sm:m-4 md:m-4 lg:m-3">
                    <Skeleton width="100%" height="22rem" className="bg-slate-700" />
                    <div className="absolute bottom-0 left-0 right-0 text-white p-4 justify-between items-center">
                        <Skeleton width="60%" height="1.5rem" className="mb-2 bg-slate-400 rounded-md" />
                        <Skeleton width="40%" height="1.2rem" className="mb-2 bg-slate-400 rounded-md" />
                        <div className="flex">
                            <Skeleton width="3rem" height="1.5rem" className="mr-2 rounded-2xl bg-slate-400" />
                            <Skeleton width="3rem" height="1.5rem" className="mr-2 rounded-2xl bg-slate-400" />
                            <Skeleton width="3rem" height="1.5rem" className="rounded-2xl bg-slate-400" />
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div className="card bg-[#F8F7F4]">
                <Carousel value={skeletonData} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={2000} itemTemplate={skeletonCardTemplate} />
            </div>
        );
    };

    return (
        <div>
            {loading ? (
                <div className="card bg-[#F8F7F4]">
                    <LoadingTemplate />
                </div>
            ):(
                <div className="card bg-[#F8F7F4]">
                    <Carousel value={cards} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={2000} itemTemplate={CardTemplate} />
                </div>
            )}
        </div>
    )
}
export default CardSlider1;