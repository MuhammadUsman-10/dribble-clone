import CardItem from "../Components/UI/CardItem";

const CardsListing = () => {
    const cardData = [
        {
            id: 1,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Afterglow",
            title: "UI/UX Design for Cryptocurrency",
            type: "TEAM",
            likes: 72,
            views: "10k"
            },
            {
            id: 2,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Koloroglow",
            title: "UI/UX Design for Cryptocurrency",
            type: "PRO",
            likes: 72,
            views: "10k"
        },
        {
            id: 3,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Lightroom",
            title: "UI/UX Design for Cryptocurrency",
            type: "PRO",
            likes: 72,
            views: "10k"
        },
        {
            id: 4,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Afterglow",
            title: "UI/UX Design for Cryptocurrency",
            type: "TEAM",
            likes: 72,
            views: "10k"
        },
        {
            id: 5,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Koloroglow",
            title: "UI/UX Design for Cryptocurrency",
            type: "PRO",
            likes: 72,
            views: "10k"
        },
        {
            id: 6,
            image: "https://th.bing.com/th/id/OIP.H0qqCl2_b0BRTzsnEtO2pgHaE7?rs=1&pid=ImgDetMain",
            brand: "Lightroom",
                title: "UI/UX Design for Cryptocurrency",
            type: "PRO",
            likes: 72,
            views: "10k"
        }
        ];
    
    return (
        <div className="mb-40">
            <h1 className="pt-24 pb-12 text-[50px] text-center">Explore inspiring designs</h1>
            <div className="container mx-auto p-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cardData.map((cardData) => (
                    <CardItem key={cardData.id} item={cardData} />
                ))}
                </div>
            </div>
        </div>
    );
};
export default CardsListing;