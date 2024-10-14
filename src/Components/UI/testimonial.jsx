const Testimonial = ({item}) => { 
    const {image, title, name, description} = item;

    return (
        <div className="mx-auto border w-full bg-white items-center  rounded-lg overflow-hidden shadow-lg">
            <div>
            <i className="fas fa-quote-left text-4xl text-pink-500 px-5 pt-10"></i>
            </div>
            <div className="p-3 mx-2">
                <p className="">{description}</p>
            </div>
            <div className="flex items-center p-5">  
                <img src={image} alt={name} className="p-2 w-24 h-24 rounded-full" />
                <div className="flex flex-col justify-start">
                    <h2 className="px-5 text-xl font-bold">{name}</h2>
                    <h2 className="px-5 text-sm text-slate-400">{title}</h2>
                </div>
            </div> 
        </div>
    );
    }
export default Testimonial;