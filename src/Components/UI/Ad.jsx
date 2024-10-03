const Ad = () => {
    return (
        <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center bg-[#ffda79] py-10 sm:py-20">
            <h1 className="mb-5 mx-[30px] md:mx-20 lg:mx-48 xl:mx-[450px] mt-10 text-center text-[40px] md:text-[60px] lg:text-[60px] font-semibold">
                Find your next designer today
            </h1>
            <p className="mt-4 mb-5 mx-3 md:mx-24 lg:mx-[220px] xl:mx-[430px] text-center text-[22px] md:text-xl">
                The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
            </p>
            <div className="button-group mt-6 space-x-0 sm:space-x-4 text-center flex flex-col sm:flex-row items-center">
                <button className="bg-black py-4 px-8 text-sm text-white rounded-full font-semibold hover:bg-slate-700 transition duration-300 mb-4 sm:mb-0 sm:mr-4 sm:py-3 sm:px-5 sm:text-base">
                    Get Started Now
                </button>
                <button className="bg-white py-4 px-8 text-sm text-black rounded-full font-semibold hover:text-slate-700 transition duration-300 sm:py-3 sm:px-5 sm:text-base">
                    Learn about hiring
                </button>
            </div>
            <p className="mt-6 text-md md:text-lg text-center">
                Are you a designer? <br className="sm:hidden" />
                <a href="/signup/new" className="underline">Join Dribbble</a>
            </p>
        </div>
    );
};

export default Ad;
