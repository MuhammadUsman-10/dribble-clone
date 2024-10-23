import {Link} from 'react-router-dom';
const Card = ({ cardData }) => {
    const { image_url, brand,title, type, likes, views } = cardData;
    return (
        <>
            <div className="max-w-sm mx-auto ">
                <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <Link to={`shots/${title}`} >
                        <img src={image_url} alt={title} className="w-full h-80 object-cover cursor-pointer" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent text-white p-4 min-h-[100px] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to={`shots/${title}`} className="text-lg font-semibold truncate max-w-[70%]">
                                {title}
                            </Link>
                            <div className="flex">
                                <Link to="/bucketings/new" ><i className="far fa-bookmark fa-xs ml-1 mr-2 cursor-pointer text-black bg-white rounded-full px-3 py-3 hover:text-slate-500" ></i></Link>
                                <Link to="/likes" ><i className="far fa-heart fa-xs cursor-pointer text-black bg-white rounded-full p-3 hover:text-slate-500"></i></Link>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex justify-between items-center p-4 bg-transparent mt-0">
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white"></i>
                        </div>
                        <span className="text-black ml-2">{brand}</span>
                        <span className="bg-slate-300 text-white text-xs py-1 px-1 rounded ml-2 hover:bg-black"><a href="/teams">{type}</a></span>
                    </div>
                    <div className="flex items-center">
                        <Link to="/likes"><i className="fa fa-heart text-gray-400 mr-1 hover:text-pink-400"></i></Link>
                        <span className="text-black">{likes}</span>
                        <i className="fas fa-eye text-gray-400 ml-4 mr-1"></i>
                        <span className="text-black">{views}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;