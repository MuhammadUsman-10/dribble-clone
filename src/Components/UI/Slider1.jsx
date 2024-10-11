import {useState, useEffect} from "react";
import {cardService} from "../assets/card.js";
import { Carousel } from 'primereact/carousel';

const CardSlider1 = () => {
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
        cardService.getCardsMax().then((data) => setCards(data.slice(0, 12)));
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
    return (
        <div className="card bg-[#F8F7F4]">
            <Carousel value={cards} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={2000} itemTemplate={CardTemplate} />
        </div>
    )
}
export default CardSlider1;