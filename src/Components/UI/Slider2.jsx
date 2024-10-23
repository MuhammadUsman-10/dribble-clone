import {useState, useEffect} from "react";
import {Skeleton} from 'primereact/skeleton';
// import {Card} from "../assets/cards2.js";
import { Carousel } from 'primereact/carousel';
import axios from 'axios';

const CardSlider2 = () => {
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
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '768px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '640px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '500px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        const fetchcardData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/c/bb7d-b98c-42ad-8daf'); // Adjust the endpoint as necessary
                setCards(response.data);
                console.log('Card data:', response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchcardData(); // Call the fetch function on component mount
    }, []);

    const CardTemplate = (card) => {
    return (
            <div className="max-w-xs mx-auto rounded-lg">
                <div className="m-3 mt-3 border-t-4 border-red-100 rounded-lg border-r-4 hover:shadow-[4px_-4px_0px_0px_rgba(254,226,226,1)] transition ">
                    <div className="m-1 border-t-4 border-slate-200 rounded-lg border-r-4 hover:shadow-[4px_-4px_0px_0px_rgba(226,232,240,1)] transition">
                        <div className="relative bg-gray-800 rounded-lg overflow-hidden object-cover ">
                            <img src={card.image} alt={card.title} className="w-full h-[220px] cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center pt-4 bg-transparent mt-0 pl-6 p-1">
                    <div className="p-3 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                        <i className="fas fa-user text-white"></i>
                    </div>
                    <span className="lg:text-xl font-semibold text-black ml-2">{card.title}</span>
                </div>
            </div>
        );
    };

    const LoadingTemplate = () => {
        const skeletonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const skeletonCardTemplate = () => (
            <div className="animate-pulse max-w-xs mx-auto rounded-lg">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden object-cover m-3 ">
                    <Skeleton width="100%" height="220px" className="bg-slate-700" />
                </div>
                <div className="flex items-center pt-4 bg-transparent mt-0 pl-6 p-1">
                    <Skeleton shape="circle" size="2rem" className="bg-slate-400" />
                    <Skeleton width="60%" height="1.5rem" className="ml-2 bg-slate-400 rounded-md" />
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
                <div className="card my-20">
                    <LoadingTemplate />
                </div>
            ):(
                <div className="card my-20">
                    <Carousel value={cards} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    autoplayInterval={3000} itemTemplate={CardTemplate} />
                </div>
            )}
        </div>
    )
}
export default CardSlider2;