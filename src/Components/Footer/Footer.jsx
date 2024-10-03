
import { Link } from "react-router-dom";
import CardSlider2 from "../UI/Slider2";

const quickLinks = [
  {
    path: "/for-designers",
    display: "For Designers",
  },

  {
    path: "/hiring",
    display: "Hire talent",
  },

  {
    path: "/shots/popular",
    display: "Inspiration",
  },
  {
    path: "/advertise",
    display: "Advertising",
  },
  {
    path: "/stories",
    display: "Blog",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/careers",
    display: "Careers",
  },
  {
    path: "/contact",
    display: "Support",
  },
];

const socialIcons = [
  {
    icon: <i className="fab fa-twitter" />,
    link: "https://twitter.com/",
  },
  {
    icon: <i className="fab fa-facebook-square"/>,
    link: "https://www.facebook.com/",
  },

  {
    icon: <i className="fab fa-instagram"/>,
    link: "https://www.instagram.com/",
  },
  {
    icon: <i className="fab fa-pinterest"/>,
    link: "https://www.pinterest.com/",
  },
];

const footerLinks = [
  {
    path: "/directories/jobs",
    display: "Jobs",
  },

  {
    path: "/directories/designers",
    display: "Designers",
  },

  {
    path: "/directories/freelance-designers",
    display: "Freelancers",
  },
  {
    path: "/tags",
    display: "Tags",
  },
  {
    path: "/places",
    display: "Places",
  },
  {
    path: "/recources",
    display: "Resources",
  }
];
const extraLinks = [
  {
    path: "/terms",
    display: "Terms",
  },

  {
    path: "/privacy",
    display: "Privacy",
  },

  {
    path: "/cookie-policy",
    display: "Cookies",
  },
];


const Footer = () => {

  return (
    <> 
      <CardSlider2/>
      <div className="mx-4">
        <div className="mx-auto flex flex-col lg:flex-row justify-between items-center p-6 z-50">
          <Link to="/home">
              <img
                src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo.png"
                className="w-[80px] h-[40px] sm:w-[105px] sm:h-[55px] font-semibold text-black hover:text-slate-700"
                alt="Logo"
              />
          </Link>
          <div className="flex flex-wrap lg:flex justify-center space-x-6 lg:space-x-6 py-5">
            {quickLinks.map((item, index) => (
              <Link to={item.path} key={index} className="text-black text-base font-semibold">
                {item.display}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map((item, index) => (
              <a className="text-xl" href={item.link} key={index} target="_blank" rel="noopener noreferrer" >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto flex flex-col lg:flex-row justify-between items-center p-6 z-50">
          <div className="flex flex-wrap lg:flex justify-center space-x-6 lg:space-x-8">
            {/* <ul> */}
            <p className="text-slate-600">
                  <i className="far fa-copyright text-xs"></i> 2024 Dribble
                </p>
              
              {extraLinks.map((item, index) => (
                <Link to={item.path} key={index} className="text-slate-600 text-base font-semibold">
                  {item.display}
                </Link>
              ))}
            {/* </ul>      */}
          </div>
          <div className="flex flex-wrap lg:flex justify-center space-x-6 lg:space-x-8 py-5">
              {footerLinks.map((item, index) => (
                <Link to={item.path} key={index} className="text-slate-600 text-base font-semibol">
                  {item.display}
                </Link>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
