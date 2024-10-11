
export const cardService = {
    getCards() {
        return[
            {
                id: 1,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Usman Aamir",
                title: "UI/UX Designer",
                work1: "Illustration",
                work2: "Figma",
                work3: "Adobe XD",
            },
            {
                id: 2,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Atif Khan",
                title: "Project Manager",
                work1: "Agile",
                work2: "Architecture",
                work3: "Scrum",
            },
            {
                id: 3,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Sameer Qureshi",
                title: "Web Developer",
                work1: "MERN",
                work2: "PHP",
                work3: "Desktop",
            },
            {
                id: 4,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Khan Babar",
                title: "App developer",
                work1: "Mobile",
                work2: "Android",
                work3: "IOS",
            },
            {
                id: 5,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Yousuf Khan",
                title: "Business Development",
                work1: "Proposals",
                work2: "Market Ads",
                work3: "Ideas",
            },
            {
                id: 6,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Imran Khan",
                title: "DevOps Engineer",
                work1: "Productions",
                work2: "CI/CD",
                work3: "Automation",
            },
            {
                id: 7,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Usman Aamir",
                title: "Frontend Developer",
                work1: "Illustration",
                work2: "Figma",
                work3: "Adobe XD",
            },
            {
                id: 8,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Atif Khan",
                title: "Backend Developer",
                work1: "Agile",
                work2: "Architecture",
                work3: "Scrum",
            },
            {
                id: 9,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Sameer Qureshi",
                title: "ML Engineer",
                work1: "MERN",
                work2: "PHP",
                work3: "Desktop",
            },
            {
                id: 10,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Khan Babar",
                title: "IOS Developer",
                work1: "Mobile",
                work2: "Android",
                work3: "IOS",
            },
            {
                id: 11,
                image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
                name: "Yousuf Khan",
                title: "SQA Engineer",
                work1: "Proposals",
                work2: "Market Ads",
                work3: "Ideas",
            },
            {
                id: 12,
                image: "https://th.bing.com/th/id/OIP.W65pxch2H1nHhSgBPascwAAAAA?w=460&h=460&rs=1&pid=ImgDetMain",
                name: "Imran Khan",
                title: "DBA Administrator",
                work1: "Productions",
                work2: "CI/CD",
                work3: "Automation",
            }
        ];
    },
    getCardsMini() {
        return Promise.resolve(this.getCards().slice(0, 7));
    },
    getCardsMax() {
        return Promise.resolve(this.getCards().slice(0, 12));
    }
};

// export default card;