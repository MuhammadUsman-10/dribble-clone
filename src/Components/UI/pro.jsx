const Pro = ({item}) => { 
    const {image, title, description} = item;

    return (
        <div className="mx-auto border w-full bg-white text-center items-center justify-center rounded-lg overflow-hidden shadow-lg">
            <div className="flex justify-center items-center">  
                <img src={image} alt={title} className="p-4 w-56 h-48" />
            </div> 
            <div className="">
                <h2 className="px-5 text-xl font-bold">{title}</h2>
                <p className="p-7 ">{description}</p>
            </div>
        </div>
    );
    }
export default Pro;