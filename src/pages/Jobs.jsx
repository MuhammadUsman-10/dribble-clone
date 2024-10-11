import { Link } from "react-router-dom";

const Jobs = () => {
    return (
        <div className="bg-white">
            <div className="w-full h-auto text-center items-center">
                <h1 className="text-2xl md:text-7xl font-serif mx-4 lg:mx-[185px] pt-28">The #1 job board for graphic design jobs</h1>
                <p className="text-base text-slate-600 mx-5 lg:mx-36 font-normal mt-5">Dribbble is the heart of the design community and the best resource to 
                    discover and connect with designers and jobs worldwide.</p>
                <Link to="/hiring"><button className="bg-slate-900 text-white font-semibold mt-6 py-5 px-7 rounded-full shadow-lg hover:bg-slate-700 transition duration-300"><i className="fas fa-plus mr-2"></i>Post a Job</button></Link>
            </div>
        </div>
    );
};

export default Jobs;