import {useState, useEffect} from "react";
import {Card} from "../assets/cards2.js";
import { Carousel } from 'primereact/carousel';

const CardSlider2 = () => {
    const [cards, setCards] = useState([]);
    const responsiveOptions = [
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
        Card.getCardsMax().then((data) => setCards(data.slice(0, 12)));
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
    return (
        <div className="card my-20">
            <Carousel value={cards} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={CardTemplate} />
        </div>
    )
}
export default CardSlider2;