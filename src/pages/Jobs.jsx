import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import {Skeleton} from 'primereact/skeleton';
import axios from 'axios';
import JobItem from "../Components/UI/jonItem,";

const Jobs = () => {
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const skeletonCards = Array(10).fill(0);

    const togleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/c/aa37-7822-4a23-880f'); // Adjust the endpoint as necessary
                setJobData(response.data);
                console.log('Job data:', response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching car data:', error);
            }
        };

        fetchJobData();
    }, []);

    const LoadingTemplate = () => (
        <Card className="w-full max-w-3xl mx-auto border p-6 my-10">
            <div className="flex animate-pulse items-center space-x-4 border-round border-1 surface-border">
                <Skeleton shape="square" size="4rem" className=" bg-slate-400" />
                <div className="flex-grow">
                    <div className="flex items-center mb-2">
                        <Skeleton width="30%" height="1.5rem" className="mr-2 bg-slate-400" />
                        <Skeleton shape="circle" size="1.5rem" className="bg-slate-400" />
                    </div>
                    <Skeleton width="50%" height="1rem" className="mb-2 bg-slate-400" />
                </div>
                <Skeleton width="5rem" height="1.5rem" className="flex-shrink-0 bg-slate-400" />
            </div>
        </Card>
    );

    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="w-full h-auto text-center items-center mb-24">
                    <h1 className="text-2xl md:text-7xl font-serif mx-4 lg:mx-[185px] xl:mx-72 2xl:mx-80 pt-28">The #1 job board for graphic design jobs</h1>
                    <p className="text-base text-slate-600 mx-5 lg:mx-36 xl:mx-72 2xl:mx-[400px] font-normal mt-5">Dribbble is the heart of the design community and the best resource to 
                        discover and connect with designers and jobs worldwide.</p>
                    <Link to="/hiring">
                        <button className="bg-slate-900 text-white font-semibold mt-6 py-5 px-7 rounded-full shadow-lg hover:bg-slate-700 transition duration-300">
                            <i className="fas fa-plus mr-2"></i>Post a Job
                        </button>
                    </Link>
                </div>
                <div className="mx-auto flex justify-start items-center my-4 p-8">
                    <Link to="/jobs" className="mx-2 text-base text-black rounded-full bg-slate-100 px-3 py-2">
                        Job Board
                    </Link>
                    <Link to="/designers" className="mx-2 text-base text-slate-600 hover:text-slate-900 transition duration-300">
                        Designer Search
                    </Link>
                </div>
                <div className="flex mx-2">
                    <div className="w-full md:w-2/3 lg:w-2/3">
                        <div className="relative mx-4 ">
                            <i className="w-full fas fa-search rounded-xl px-3 py-5 outline outline-1 outline-slate-200 hover:ring-4 hover:ring-pink-100 transition">
                                <input className="ml-4 font-normal focus:outline-none "
                                placeholder="Search for Jobs"/>
                            </i>
                        </div>
                        <div className="flex justify-between">
                            <div className="my-10 mx-4 px-2">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">Recent posts</h3>
                                <p className="text-xs md:text-sm lg:text-base text-slate-600">3 new oppurtunities posted today!</p>
                            </div>
                            <div className="md:hidden flex items-center gap-2 pr-8">
                                <button onClick={togleFilter} className="md:hidden">
                                    {isFilterOpen ? (
                                        <i className="fas fa-caret-down"></i>// Close icon when menu is open
                                    ) : (
                                        <i className="fas fa-caret-down rotate-180"></i> // Bars icon when menu is closed
                                    )}
                                </button>
                                <p className="text-xs md:text-sm lg:text-base text-slate-600">Filter</p>
                            </div>
                        </div>
                        {loading ?
                                skeletonCards.map((_, index) => (
                                    <LoadingTemplate key={index} />
                                ))
                            :
                                jobData.map((job, index) => (
                                    <JobItem key={index} jobData={job} />
                                ))
                        }
                    </div>
                        <div className="w-1/3 hidden md:inline-block">
                            <div className="md:w-full lg:w-full xl:w-4/5 max-w-4xl mx-auto p-10 border rounded-xl shadow-sm">
                                <div className="mb-8">
                                    <h2 className="text-xl font-semibold mb-2">Specialties</h2>
                                    <div className="space-y-2 w-full">
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Animation</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Brand / Graphic Design</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Illustration</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Leadership</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Mobile Design</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">UI/Visual Design</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Product Design</span>
                                        </label>
                                        <label className="flex items-center mb-2">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">UX Design / Research</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md  hover:ring-4 hover:ring-pink-100 transition" />
                                            <span className="md:text-xs lg:text-lg ml-3">Web Design</span>
                                        </label>
                                    </div>
                                </div>
                                <hr className="my-5" />
                                <div className="mb-6">
                                    <h2 className="text-xl font-semibold mb-2">Location</h2>
                                    <input type="text" placeholder="Enter Location..." className="w-full px-2 py-4 outline outline-1 outline-slate-200 hover:ring-4 hover:ring-pink-100 transition rounded-2xl mb-2" />
                                    <label className="flex items-center">
                                        <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                        <span className="md:text-xs lg:text-lg ml-3">Open to remote</span>
                                    </label>
                                </div>
                                <hr className="my-5" />
                                <div className="mb-8">
                                <label className="flex items-center mb-2">
                                        <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                        <span className="md:text-xs lg:text-lg ml-3">Full-Time</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="appearance-none h-5 w-5 border border-gray-300 rounded-md hover:ring-4 hover:ring-pink-100 transition" />
                                        <span className="md:text-xs lg:text-lg ml-3">Freelance/Contract</span>
                                    </label>
                                </div>
                                <button className="w-full py-2 rounded-full bg-gray-400 text-white rounded-m">Filter</button>
                            </div>
                        </div>

                </div> 
            </div>
        </div>
    );
};

export default Jobs;