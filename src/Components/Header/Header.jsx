import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    { path: "/hiring", display: "Find Designers" },
    { path: "/shots/popular", display: "Inspiration" },
    { path: "/jobs", display: "Jobs" },
    { path: "/pro", display: "Go Pro" }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        if (isMenuOpen) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
        document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Cleanup function to reset the overflow when the component unmounts
        return () => {
        document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);
    return (
        <>
            <div className={`mx-auto flex justify-between items-center p-6 z-50 ${isMenuOpen ? 'bg-white' : 'bg-[#F8F7F4]'}`}>
                {/* <div className={`mx-auto flex justify-between items-center p-6 z-50 bg-white`}> */}
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="lg:hidden mt-3 mr-4">
                        {isMenuOpen ? (
                            <i className="fas fa-times text-2xl"></i> // Close icon when menu is open
                        ) : (
                            <i className="fas fa-bars text-2xl"></i> // Bars icon when menu is closed
                        )}
                    </button>
                    <Link to="/home">
                        <img
                            src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo.png"
                            className="w-[80px] h-[40px] sm:w-[105px] sm:h-[55px] text-md font-semibold text-black hover:text-slate-700"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map((item, index) => (
                        <Link to={item.path} className="text-base font-semibold text-black hover:text-slate-700" key={index} >
                        {item.display}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <i className="fas fa-search rounded-full px-3 py-2 border-4 border-transparent hover:border-pink-100 lg:bg-white transition">
                        <input
                            className="hidden lg:inline-block p-2 pl-3 focus:outline-none font-light w-[150px] lg:w-[200px]"
                            placeholder="Search..."
                        />
                        </i>
                    </div>
                    <button className="hidden lg:inline-block pr-3 text-base font-semibold">
                        Log in
                    </button>
                    <button className="bg-black py-3 px-5 text-xs text-white rounded-full font-semibold hover:bg-slate-700 transition duration-300 sm:py-3 sm:px-5 sm:text-base">
                        Sign Up
                    </button>
                </div>
            </div>
            <div className={`lg:hidden fixed top-[113px] left-0 w-full h-auto bg-white shadow-lg z-40 transform ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-start p-5 space-y-5">
                    {navLinks.map((item, index) => (
                        <Link
                        to={item.path}
                        className="text-base font-semibold text-black hover:text-slate-700"
                        key={index}
                        onClick={toggleMenu}
                        >
                        {item.display}
                        </Link>
                    ))}
                    <div className="flex flex-col items-start py-4">
                        <button className="pr-3 text-base font-semibold">Log in</button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden inset-0 bg-black opacity-50 z-30" onClick={toggleMenu}></div>
            )}
        </>
    );
};

export default Header;
