import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "primereact/card";
import {Skeleton} from 'primereact/skeleton';
import {Tag} from 'primereact/tag';

const Jobs = () => {
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/c/a0a2-21f1-4e38-9856'); // Fetching data from the provided API
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json(); // Parse JSON data
                console.log(data);
                setJobData(data);
                setLoading(false); // Stop loading when data is fetched
            } catch (error) {
                console.error("Error fetching job data:", error);
                setLoading(false); // Stop loading even if there's an error
            }
        };

        fetchData(); // Call the fetch function on component mount
    }, []);

    if (loading) {
        return (
            <Card className="w-full max-w-2xl mx-auto">
                <div className="flex items-center space-x-4">
                <Skeleton shape="square" size="4rem" className="flex-shrink-0" />
                <div className="flex-grow">
                    <Skeleton width="60%" height="1.5rem" className="mb-2" />
                    <Skeleton width="40%" height="1rem" className="mb-2" />
                    <Skeleton width="20%" height="1rem" />
                </div>
                <Skeleton width="5rem" height="2rem" className="flex-shrink-0" />
                </div>
            </Card>
        );
    }

    if (!jobData){
        return null;
    }

    return (
        <div>
            <div className="bg-white">
                <div className="w-full h-auto text-center items-center">
                    <h1 className="text-2xl md:text-7xl font-serif mx-4 lg:mx-[185px] pt-28">The #1 job board for graphic design jobs</h1>
                    <p className="text-base text-slate-600 mx-5 lg:mx-36 font-normal mt-5">Dribbble is the heart of the design community and the best resource to 
                        discover and connect with designers and jobs worldwide.</p>
                    <Link to="/hiring"><button className="bg-slate-900 text-white font-semibold mt-6 py-5 px-7 rounded-full shadow-lg hover:bg-slate-700 transition duration-300"><i className="fas fa-plus mr-2"></i>Post a Job</button></Link>
                </div>
            </div>
            {jobData && 
                <Card className="w-full max-w-2xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <img src={jobData.image_url} alt={`${jobData.company} logo`} className="w-16 h-16 flex-shrink-0" />
                        <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                            <h2 className="text-lg font-semibold">{jobData.company}</h2>
                            {jobData.isVerified && (
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">✓</span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{jobData.job_title}</h3>
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-500">{jobData.location}</span>
                        </div>
                        </div>
                        {jobData.isFeatured && (
                        <Tag value="FEATURED" severity="warning" className="flex-shrink-0" />
                        )}
                    </div>
                </Card>
            }

        </div>
    );
};

export default Jobs;