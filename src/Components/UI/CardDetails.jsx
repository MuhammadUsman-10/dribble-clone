// import cardData from "../assets/cards3";
import {Link} from 'react-router-dom';
import CardItem2 from "./CardItem2";
import CardItem from "./CardItem";
import cardData from "../assets/cards3";

const CardDetails = () => {
    // const {image, brand, title} = item;
    return (
        <div className="bg-white">
            <div className="container lg:mx-auto lg:max-w-[1100px] p-14 bg-white rounded-lg">
                <header className="w-full">
                    <div className="p-3 text-3xl font-semibold">
                        <h1>Lightroom Editing Tool</h1>
                    </div>
            
                    <div className="flex flex-row justify-between mt-5 mb-12 ">
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 bg-gray-800 rounded-full">
                                <i className="fas fa-user text-white px-[15px] p-2 text-lg" />
                            </div>
                            <div className="flex flex-col text-base justify-between ml-2">
                                <span className="ml-2">Muhammad Usman</span>
                                <div className="ml-2 flex flex-row gap-2 justify-between items-center">
                                    <h2 className="text-green-500 text-sm cursor-pointer">Available for work</h2>
                                    <button className="text-slate-500 text-sm hover:text-slate-900 hidden sm:inline-block">
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <i className="far fa-heart rounded-full p-3 border border-1"></i>
                            <i className="far fa-bookmark rounded-full px-[14px] py-3 border"></i>

                            {/* Show on large screens */}
                            <button className="hidden sm:block bg-slate-900 hover:bg-slate-700 rounded-full px-4 py-2 text-white font-semibold">
                                Get in Touch
                            </button>

                            {/* Show on small screens */}
                            <i className="far fa-envelope rounded-full block sm:hidden p-3 border border-1"></i>
                        </div>
                    </div>
                </header>

                <div className="relative flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="w-full lg:w-4/5 h-full">
                        <img src="https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain" alt="Big" className="w-full h-full rounded-lg" />
                    </div>

                    {/* Icons Section */}
                    <div className="absolute top-0 right-0 lg:static flex lg:flex-col gap-4 p-4">
                        <div className="flex-none">
                            <i className="far fa-comment rounded-full p-3 border"></i>
                        </div>
                        <div className="flex-none">
                            <i className="far fa-share-square rounded-full p-3 border"></i>
                        </div>
                        <div className="flex-none">
                            <i className="fas fa-info-circle text-black rounded-full p-3 border"></i>
                        </div>
                    </div>
                </div>

                <div className="py-10 px-1 lg:px-32 lg:text-2xl md:px-8 text-xl">
                    <p>I love this ad I designed for Cosmic Radio, along with the logo and visual identity.</p>
                    <br />
                    <p>Cosmic Radio is a music streaming service optimized for non-ordinary states with highly curated music for processing emotions, psychedelic therapy, meditation, concentration and flow states.</p>
                    <br />
                    <p>This wasn&apos;t the final approved design, but I loved how the direction turned out.</p>
                    <br />
                    <p className="font-bold">For business inquiries:</p>
                    <p className="underline underline-offset-4 decoration-pink-500">lucasfields.net</p>
                    <p className="underline underline-offset-4 decoration-pink-500">hi@lucasfields.net</p>
                    <br />
                    <p>The logo and images in this post require the designer&apos;s consent for use or distribution. © Lucas Fields 2024. All rights reserved.</p>
                </div>

                <div className='m-20'>
                    <div className='flex justify-center items-center pb-5'>
                        <div className='h-[2px] w-80 bg-slate-300' />
                        <a className='px-3'>
                            <div className="w-16 h-16 bg-gray-800 rounded-full text-center">
                                <i className="fas fa-user text-white p-4 text-lg " />
                            </div>
                        </a>
                        <div className='w-80 h-[2px] bg-slate-300' />
                    </div>
                    <div className='text-center'>
                        <a href='/userprofile'>
                            <h2 className='text-xl font-medium pb-2'>Muhammad Usman</h2>
                        </a>
                        <p className='text-lg text-slate-500 pb-4'>Full Stack Developer with a modern approach</p>
                        <button className="bg-slate-900 hover:bg-slate-700 rounded-full px-5 py-3 text-white font-semibold">Get in Touch</button>
                    </div>
                </div>

                <div className="flex-col justify-between my-20">
                    <div className='flex justify-between p-4'>
                        <h2 className='text-base lg:text-xl font-semibold'>More Related Items</h2>
                        <Link className='text-base font-semibold'>View Profile</Link>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                        {cardData.slice(0, 4).map((item) => (
                            <CardItem2 item={item} key={item} />
                        ))}
                    </div>
                </div>

                <div className="flex-col justify-between">
                    <div className='p-4'>
                        <h2 className='text-base lg:text-xl font-semibold'>You might also like</h2>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {cardData.slice(0, 6).map((item) => (
                            <CardItem item={item} key={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;