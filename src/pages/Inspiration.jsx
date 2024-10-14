import CardsListing from "./CardsListing";

const Inspiration = () => {
    const trendingSearches = ["landing page", "ios", "food", "landingpage", "uxdesign", "app design"]

    return (
        <>
            <div className="flex flex-col items-center justify-center px-4 py-12 bg-white text-center mb-30">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-4 max-w-4xl font-serif">
                    Discover the world&apos;s top designers & creatives
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl font-serif">
                    Dribbble is the leading destination to find & shodwcase creative work and home to the world&apos;s best design professionals.
                </p>
                <div className="relative w-full max-w-2xl mb-8">
                <i className="px-6 fas fa-search absolute top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search 18 million+ shots..."
                        className="w-full py-4 px-14 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <span className="text-sm text-gray-600 mr-2">Trending searches</span>
                    {trendingSearches.map((search, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 cursor-pointer">
                        {search}
                    </span>
                    ))}
                    
                </div>
            </div>
            <CardsListing />
        </>
    )
}

export default Inspiration;