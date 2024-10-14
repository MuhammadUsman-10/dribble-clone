import {Link} from 'react-router-dom';
const Card2 = ({ item }) => {
    const { image, brand,title, type, likes, views } = item;
    return (
        <>
            <div className="max-w-sm mx-auto ">
                <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <Link to={`shots/${title}`} ><img src={image} alt={title} className="w-64 h-44 object-cover cursor-pointer" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-700 to-transparent text-white p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link to={`shots/${title}`} className="text-md truncate max-w-[70%]">{title}</Link>
                        <div className="flex">
                            <Link to="/bucketings/new" ><i className="far fa-bookmark fa-xs ml-1 mr-2 cursor-pointer text-black bg-white rounded-full px-3 py-3 hover:text-slate-500" ></i></Link>
                            <Link to="/likes" ><i className="far fa-heart fa-xs cursor-pointer text-black bg-white rounded-full p-3 hover:text-slate-500"></i></Link>
                        </div>
                    </div></Link>
                </div>
            </div>
        </>
    );
};
export default Card2;