
export const Card = {
    getCards() {
        return[
            {
                id: 1,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                title: "UI/UX Designer",
            },
            {
                id: 2,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                title: "Project Manager",
            },
            {
                id: 3,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                title: "Web Developer",
            },
            {
                id: 4,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                title: "App developer",
            },
            {
                id: 5,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                title: "Business Development",
            },
            {
                id: 6,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                title: "DevOps Engineer",
            }
        ];
    },
    getCardsMini() {
        return Promise.resolve(this.getCards().slice(0, 7));
    }
};

// export default card;