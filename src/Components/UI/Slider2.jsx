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
        Card.getCardsMini().then((data) => setCards(data.slice(0, 6)));
    }, []);

    const CardTemplate = (card) => {
    return (
            <div className="max-w-xs mx-auto rounded-lg border shadow-lg">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden object-cover shadow-lg">
                    <img src={card.image} alt={card.title} className="w-full h-[200px] cursor-pointer" />
                </div>
                <div className="flex justify-between items-center pt-4 bg-transparent mt-0">
                    <span className="text-black ml-2">{card.title}</span>
                </div>
            </div>
        );
    };
    return (
        <div className="card my-20">
            <Carousel value={cards} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={2000} itemTemplate={CardTemplate} />
        </div>
    )
}
export default CardSlider2;