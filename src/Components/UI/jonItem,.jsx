// import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
// import { Tag } from 'primereact/tag';

const JobItem = ({ jobData }) => {
    const { company, job_title, location,time, isfeatured, image_url } = jobData;

    return (
        <Card className=" max-w-3xl lg:max-w-5xl border rounded-lg p-4 mx-4 my-10">
            <div className="w-full relative group flex items-center space-x-4">
                <img src={image_url} alt={`${company} logo`} className="w-14 h-14" />
                <div className="hidden md:inline-block absolute right-0 p-4 min-h-[80px] justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                        <button className='md:px-2 py-1 lg:px-4 md:py-2 rounded-full text-sm md:text-base font-medium border border-slate-300 hover:border-slate-500'>View Job</button>
                        <button className='md:px-2 py-1 lg:px-4 md:py-2 rounded-full text-sm md:text-base font-medium border border-slate-300 hover:border-slate-500'>Apply Now</button>
                    </div>
                </div>
                <div className="w-full flex md:justify-between items-center">
                    {isfeatured ? (
                        <div className="flex-col items-center w-1/2 sm:w-full md:w-2/4">
                            <div className='flex items-center space-x-2 mb-2'>
                                <h2 className="text-xs md:text-base font-semibold">{company}</h2>
                                <i className="fas fa-bolt text-white text-xs bg-pink-600 rounded-full px-2 py-1"></i>
                            </div>
                            <div className='w-4/5'>
                                <h3 className="text-base md:text-lg font-medium mb-1 truncate max-w-[95%]">{job_title}</h3>
                                <span className="text-sm md:hidden text-gray-500">{location}</span>
                            </div>
                        </div>
                    ):(
                        <div className="flex-col items-center">
                            <div className='flex items-center space-x-2 mb-2'>
                                <h2 className="text-xs md:text-base font-semibold">{company}</h2>
                                <i className="fas fa-bolt text-white text-xs bg-pink-600 rounded-full px-2 py-1"></i>
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-medium mb-1">{job_title}</h3>
                                <span className="text-sm md:hidden text-gray-500">{location}</span>
                            </div>
                        </div>
                    )}
                    {isfeatured ? (
                        <div className='flex flex-col gap-4 items-end group-hover:opacity-0 transition-opacity duration-300'>
                            <div>
                                <button className='px-3 py-1 rounded-full text-[10px] uppercase text-pink-500 font-medium border border-pink-300 bg-pink-200'>featured</button>
                            </div>
                            <div className="hidden md:inline-block items-center space-x-2">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="text-sm text-gray-500">{location}</span>
                            </div>
                        </div>
                    ):(
                        <div className=' flex flex-col gap-4 items-end group-hover:opacity-0 transition-opacity duration-300'>
                            <div className='hidden md:inline-block'>
                                <p>{time}</p>
                            </div>
                            <div className="hidden md:inline-block items-center space-x-2">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="text-sm text-gray-500">{location}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default JobItem; 