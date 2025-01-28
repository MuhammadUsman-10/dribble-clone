import { useState } from 'react';
import Pro from '../Components/UI/pro';
import Testimonial from '../Components/UI/testimonial';

const cards = [
    {
        "id": 1,
        title: 'Stand out from the crowd',
        description: 'Rank higher in feeds to generate more leads.',
        image: 'https://framerusercontent.com/images/X8ir6msbaBxbg5ATlVN0vfJWTt4.png?scale-down-to=512',
    },
    {
        "id": 2,
        title: 'Improve conversation',
        description: 'Access advanced features that will help convert more leads.',
        image: 'https://framerusercontent.com/images/O80rhuPSKnhKidNGg2GkhURrnr4.png?scale-down-to=512',
    },
    {
        "id": 3,
        title: 'Transact for free',
        description: 'Pay no fees on transactions completed through Dribbble.',
        image: 'https://framerusercontent.com/images/FnbuguX10JNWJOCgWlZJtXLK6w.png?scale-down-to=512',
    },
];
const testimonials = [
    {
        "id": 1,
        name: 'John Doe',
        title: 'UI/UX Visual Design, Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain'
    },
    {
        "id": 2,
        name: 'ABD Velliers',
        title: 'Brand Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain'
    },
    {
        "id": 3,
        name: 'Elon Musk',
        title: 'Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain'
    },
];

const GoPro = () => {
    const [isYearly, setIsYearly] = useState(true);
    const togglePlan = () => {
        setIsYearly(!isYearly);
    };

    return (
        <>
            <div className='bg-gradient-to-r from-[#FCF7FA] via-white to-[#FCF7FA]'>
                {/* 1st Div */}
                <div className="flex w-full items-center justify-center ">
                    <div className="flex flex-col lg:flex-row lg:gap-32  items-center p-8">
                        <div className="lg:w-full flex flex-col flex-nowrap justify-center items-center lg:items-start gap-6 my-7">
                            <div><span className="m-4 p-1 rounded-sm bg-pink-100 text-pink-400 font-bold text-sm">DRIBBBLE PRO</span></div>
                            <div><h1 className="p-2 text-[45px] lg:text-6xl leading-none text-center lg:text-start font-medium text-gray-900 font-serif">Get more leads,<br/> pay no fees.</h1></div>
                            <div><p className="px-1 text-gray-600 text-center lg:text-start">Unbeatable ROI for professional designers growing their business.</p></div>
                        </div>
                        <div className="w-full lg:w-4/5 m-7 mx-auto bg-pink-200 p-8 rounded-[12px]">
                            <div className="text-center lg:text-start">
                                <span className="text-6xl font-bold text-gray-900  mr-2">${isYearly ? '8' : '12'}</span>
                                <span className="text-gray-600">per month</span>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-start my-4 px-2">
                                <div className='flex items-center justify-center lg:justify-start'>
                                    <i className={`fas ${isYearly ? 'fa-toggle-on' : 'fa-toggle-on rotate-180'} text-3xl ${isYearly ? 'text-pink-700' :  'text-pink-500'}`} onClick={togglePlan} />
                                    <p 
                                        className={`mx-3 font-bold text-center `} 
                                        onClick={() => setIsYearly(true)}
                                    >
                                        {isYearly ? 'Yearly' : 'Monthly'} 
                                    </p>
                                </div>
                                <div className={`flex`}>
                                    {isYearly && (
                                        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start my-3 ">
                                            {/* Lg */}
                                            <span className="hidden lg:inline text-purple-500 font-bold">YOU SAVE 50%</span>
                                            <span className=" absolute lg:hidden px-10 py-2 -translate-y-40 text-center rounded-full text-sm text-white bg-purple-400">Save 50% on annual billing</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <ul className="flex flex-col m-4 space-y-4 items-center justify-center lg:justify-start text-gray-700 text-sm">
                                <li className="w-36 lg:w-full flex flex-row justify-start items-center">
                                    <i className="fas fa-check text-pink-500 mr-2"></i>
                                    <span className={`${isYearly ? "line-through" : ""}`}>No fee transactions (annual plans only)</span>
                                </li>
                                <li className="w-36 lg:w-full flex flex-row justify-start items-center">
                                    <i className="fas fa-check text-pink-500 mr-2"></i>
                                    Ranking boost in feeds
                                </li>
                                <li className="w-36 lg:w-full flex flex-row justify-start items-center">
                                    <i className="fas fa-check text-pink-500 mr-2"></i>
                                    Advanced profiles
                                </li>
                                <li className="w-36 lg:w-full flex flex-row justify-start items-center">
                                    <i className="fas fa-check text-pink-500 mr-2"></i>
                                    Ad free browsing
                                </li>
                                {/* <button className="mt-8 py-3 rounded-full bg-pink-500 text-white px-10 font-bold">Pay now</button> */}
                            </ul>
                            <div className='flex justify-center lg:justify-start items-center'>
                                <button className="mt-2 py-3 rounded-full bg-pink-500 hover:bg-pink-400 transition text-white px-10 font-bold">
                                    Pay now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd Div */}
                <div className='container mx-auto my-6 p-5 items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {cards.map((cards) => (
                        <Pro key={cards.id} item={cards}>
                        </Pro>
                    ))}
                    </div>
                </div>

                {/*3rd Div*/}
                <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:gap-16 p-4 py-10 lg:px-20 max-w-screen-2xl my-10">
                    <div className="relative w-full h-auto lg:w-2/3 mb-5 lg:mb-0 px-2 lg:px-0">
                        <img src="https://framerusercontent.com/images/JprMi3z3GyPIWtw3KgpO8qrTGGs.png?scale-down-to=1024" 
                            alt="Hand holding a smartphone displaying a product"
                            className="rounded-2xl h-60 md:w-full lg:max-w-xl lg:h-80 xl:max-w-3xl xl:h-96 object-cover" 
                        />
                        <div className="absolute -bottom-6 right-8 xl:right-10 transform translate-x-1/4 translate-y-1/ rounded-xl border-4 border-white">
                            <img src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain"
                                alt="Person presenting with text overlay" 
                                className="rounded-lg w-36 h-[240px] shadow-lg lg:w-60 lg:h-80 xl:h-96 object-cover" 
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Present yourself and your work in a more compelling way.
                        </h1>
                        <p className="text-lg text-gray-900 font-normal mt-4">
                        Unlock profile features like Pitch, Advanced Stats, and much more.
                        </p>
                    </div>
                </div>
            
                {/* 4th  section */}
                <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-16 p-4 py-10 lg:px-20 max-w-screen-2xl my-10">
                    <div className="w-full lg:w-1/3">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Convert leads, deliver work, and get paid through Dribbble <br/>(for free).
                        </h1>
                        <p className="text-lg text-gray-900 font-normal mt-4">
                        Platform fees are waived for Pros who transact through Dribbble.
                        </p>
                    </div>
                    <div className="mb-16 lg:mb-0 relative w-full h-auto lg:w-2/3 grid grid-cols-3 gap-2 transform -rotate-3">
                        <div className=''>
                            <img
                                src="https://framerusercontent.com/images/Mh0qSZ4hGJD714MaqJhCH6Bgg.png"
                                alt="Colorful abstract background"
                                className="rounded-xl w-full h-full  object-cover"
                            />
                        </div>
                        <div className=''>
                            <img
                                src="https://framerusercontent.com/images/QEuOqnbx4sl63ILGyKNPA1Cu9Y.png?scale-down-to=512"
                                alt="Colorful abstract background"
                                className="rounded-xl relative h-full  object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src="https://framerusercontent.com/images/ZzJUWiTHIvvd0dWNIdnKWUCE.png"
                                alt="Colorful abstract background"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src="https://framerusercontent.com/images/mJ7RipkmLq7ka1h93MDiPvsTV0.png"
                                alt="Colorful abstract background"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src="https://framerusercontent.com/images/94zb1eow0uSGFmfrKR9wospCRY.png"
                                alt="Colorful abstract background"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <img
                                src="https://framerusercontent.com/images/HCIwiCSecmmKETZKUfbWI9iyc.png"
                                alt="Colorful abstract background"
                                className="rounded-xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* 5th  section */}
                <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:gap-16 p-4 py-10 lg:px-20 max-w-screen-2xl my-10">
                    <div className="relative w-full h-auto lg:w-2/3">
                        <img
                            src="https://framerusercontent.com/images/5EzsY6x0jjfOC9lwKAIQfHeObk.png?scale-down-to=1024"
                            alt="Colorful abstract background"
                            className="rounded-2xl w-full h-full lg:max-w-xl lg:h-80 xl:max-w-3xl xl:h-96 object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Convert leads, deliver work, and get paid through Dribbble <br/>(for free).
                        </h1>
                        <p className="text-lg text-gray-900 font-normal mt-4">
                        Platform fees are waived for Pros who transact through Dribbble.
                        </p>
                    </div>
                </div>

                {/* 6th  section */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-center space-y-8 lg:space-y-0 lg:gap-16 p-4 py-10 lg:px-20 max-w-screen-2xl my-10">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        12 Months of Webflow <br/>Included
                        </h1>
                        <p className="text-lg text-gray-900 font-normal mt-4">
                        Sign up for Dribbble Pro and get your first 12 months of Webflow&apos;s 
                        Agency or Freelancer workspace plans - for free!
                        </p>
                        <button className="mt-2 py-3 rounded-full bg-pink-500 hover:bg-pink-400 transition text-white px-10 font-bold">
                            Sign-up Now
                        </button>
                    </div>
                    <div className="relative w-full h-auto lg:w-1/2">
                        <img
                            src="https://framerusercontent.com/images/bgAPWIlrXGyW6Jqgem4ISPgxTcY.png"
                            alt="Colorful abstract background"
                            className="rounded-2xl w-full h-full lg:max-w-xl lg:h-80 xl:max-w-3xl xl:h-96 object-cover"
                        />
                    </div>
                </div>
                

                {/* 7th  section */}
                <div className='container mx-auto p-5 items-center my-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {testimonials.map((testimonials) => (
                        <Testimonial key={testimonials.id} item={testimonials} />
                        
                    ))}
                    </div>
                </div>

                {/* 8th Div */ }
                <div className="flex flex-col items-center mx-auto my-10 p-5">
                    <div className="text-center mb-8">
                        <h1 className="mx-2 md:mx-12 xl:mx-60 text-2xl lg:text-4xl font-bold text-gray-900">The most design-forward companies on the planet hire designers from Dribbble.</h1>
                        <p className="text-lg text-gray-600 mt-4">Our community partners with some of the most valuable companies on the planet.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div className="flex justify-center items-center">
                            <img src="https://www.citypng.com/public/uploads/preview/-51609775331wa9dd2khow.png" 
                            alt="Brand Logo 1" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://logowik.com/content/uploads/images/framer2146.jpg" 
                            alt="Brand Logo 2" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://cdn.imgbin.com/18/13/23/imgbin-logo-brand-microsoft-corporation-product-computer-computer-jmT0w7wTUA7Fd4ktkEKya4cMC.jpg" 
                            alt="Brand Logo 3" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://e7.pngegg.com/pngimages/257/641/png-clipart-black-and-white-logo-twitch-tv-free-twitch-donate-button-angle-white-thumbnail.png" 
                            alt="Brand Logo 1" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://logowik.com/content/uploads/images/framer2146.jpg" 
                            alt="Brand Logo 2" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://cdn.imgbin.com/18/13/23/imgbin-logo-brand-microsoft-corporation-product-computer-computer-jmT0w7wTUA7Fd4ktkEKya4cMC.jpg" 
                            alt="Brand Logo 3" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://e7.pngegg.com/pngimages/257/641/png-clipart-black-and-white-logo-twitch-tv-free-twitch-donate-button-angle-white-thumbnail.png" 
                            alt="Brand Logo 1" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://logowik.com/content/uploads/images/framer2146.jpg" 
                            alt="Brand Logo 2" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <img src="https://cdn.imgbin.com/18/13/23/imgbin-logo-brand-microsoft-corporation-product-computer-computer-jmT0w7wTUA7Fd4ktkEKya4cMC.jpg" 
                            alt="Brand Logo 3" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://e7.pngegg.com/pngimages/257/641/png-clipart-black-and-white-logo-twitch-tv-free-twitch-donate-button-angle-white-thumbnail.png" 
                            alt="Brand Logo 1" 
                            className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://logowik.com/content/uploads/images/framer2146.jpg" 
                                alt="Brand Logo 2" 
                                className="h-16 w-auto" 
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://cdn.imgbin.com/18/13/23/imgbin-logo-brand-microsoft-corporation-product-computer-computer-jmT0w7wTUA7Fd4ktkEKya4cMC.jpg" 
                                alt="Brand Logo 3" className="h-16 w-auto" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th Div */ }
            <div className="h-auto text-center p-6 bg-gradient-to-r from-[#EBFAF6] to-[#E5FCE1]  b-30">
                <div className='mt-8 mb-16'>
                    <h1 className="text-[45px] lg: font-serif">Level up your career with Pro</h1>
                </div>
                <div className="w-full md:w-2/3 lg:w-2/4 bg-white rounded-[16px] shadow-lg p-6 md:p-8  mx-auto">
                    {isYearly && <div className="absolute bg-purple-500 -translate-x-2/4 -translate-y-10 md:-translate-y-12 trasition text-white text-xs md:text-sm font-bold py-1 px-2 mb-2 rounded-full inline-block">
                        SAVE 50% WITH ANNUAL BILLING
                    </div>}
                    <div className="text-center">
                        <span className="text-6xl font-bold text-gray-900  mr-2">${isYearly ? '8' : '12'}</span>
                        <span className="text-gray-600">per month</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <i className={`fas ${isYearly ? 'fa-toggle-on' : 'fa-toggle-on rotate-180'} text-3xl ${isYearly ? 'text-pink-700' :  'text-pink-500'}`} onClick={togglePlan} />
                                <p 
                                className={`mx-2 font-bold text-center `} 
                                onClick={() => setIsYearly(true)}
                            >
                                {isYearly ? 'Yearly' : 'Monthly'} 
                            </p>
                    </div>
                    <div className="m-4 flex flex-col md:flex-row md:justify-center items-center md:gap-4">
                        <div>
                            <ul className="flex flex-col justify-start items-start">
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    <span className={isYearly ? "line-through" : ""}>No fee transactions <br/>(annual plans only)</span>
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Custom website
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Advanced profiles
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Ad free browsing
                                </li>
                            </ul>   
                        </div>
                        <div>
                            <ul className="flex flex-col justify-center items-start">
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Ranking boost in feeds
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Team accounts
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    Advanced analytics
                                </li>
                                <li className="flex items-center mb-2">
                                    <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                                    12 months of Webflow
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className=" mt-2 lg:mb-8 py-3 rounded-full bg-pink-500 hover:bg-pink-400 transition text-white px-10 font-bold">
                            Pay now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GoPro;