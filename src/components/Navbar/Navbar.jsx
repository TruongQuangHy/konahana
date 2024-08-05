import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import VN from "../../assets/img/VN.png";
import EN from "../../assets/img/EN.png";
import JP from "../../assets/img/JP.png";
import { MdOutlineMenu } from "react-icons/md";
const Menu = [
  {
    id: 1,
    name: "About",
    link: "#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "Factory",
    link: "/#",
  },
  {
    id: 4,
    name: "Company Blogs",
    link: "/#",
  },
  {
    id: 5,
    name: "Recruitment",
    link: "/#",
  },
  {
    id: 6,
    name: "Contact",
    link: "/#",
  },
];
const Navbar = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const getFlag = (lang) => {
    switch (lang) {
      case "Japanese":
        return JP;
      case "Vietnamese":
        return VN;
      case "English":
        return EN;
      default:
        return EN;
    }
  };
  const currentFlag = getFlag(language);
  const firstHalf = Menu.slice(0, Math.ceil(Menu.length / 2));
  const secondHalf = Menu.slice(Math.ceil(Menu.length / 2));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  // return (
  //   <div className="bg-white">
  //     <div className="container py-2">
  //       <div className="flex justify-between items-center">
  //         {/* link section */}
  //         <div className="hidden lg:flex justify-between items-center gap-4">
  //           <ul className="hidden lg:flex justify-between items-center gap-4">
  //             {firstHalf.map((menu) => (
  //               <li key={menu.id}>
  //                 <a
  //                   className="inline-block text-xl py-4 mx-3"
  //                   href="{menu.link}"
  //                 >
  //                   {menu.name}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         {/* Logo section */}
  //         <div className="items-center gap-4">
  //           <a href="">
  //             <img className="w-36" src={logo} alt="logo" />
  //           </a>
  //         </div>
  //         {/* link section */}
  //         <div className="hidden lg:flex justify-between items-center gap-4">
  //           <ul className="hidden lg:flex justify-between items-center gap-4">
  //             {secondHalf.map((menu) => (
  //               <li key={menu.id}>
  //                 <a
  //                   className="inline-block text-xl py-4 mx-3"
  //                   href="{menu.link}"
  //                 >
  //                   {menu.name}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-white">
      <div className="container p-2 mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex justify-between items-center">
          {/* link section */}
          <div className="hidden lg:flex justify-between items-center gap-4 flex-grow">
            <ul className="flex justify-center items-center gap-4 flex-grow">
              {firstHalf.map((menu) => (
                <li key={menu.id}>
                  <a
                    className="inline-block text-xl py-4 mx-4"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Logo section */}
          <div className="flex items-center gap-4">
            <a href="">
              <img className="w-36" src={logo} alt="logo" />
            </a>
          </div>
          {/* link section */}
          <div className="hidden lg:flex justify-between items-center gap-4 flex-grow">
            <ul className="flex justify-center items-center gap-4 flex-grow">
              {secondHalf.map((menu) => (
                <li key={menu.id}>
                  <a
                    className="inline-block text-xl py-4 mx-4"
                    href={menu.link}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Language switcher */}
          <div className="hidden lg:flex items-center gap-4 relative group">
            <div className="flex items-center cursor-pointer">
              <img src={currentFlag} alt={language} className="w-6 h-4 mr-2" />
              {language}
            </div>
            <div className="absolute top-4">
              <div className="w-24 h-4 absolute bg-transparent"></div>
            </div>
            <ul
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity"
              style={{ top: "1.5rem" }}
            >
              <li
                className="flex p-2 items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange("JS")}
              >
                <img src={JP} alt="EN" className="mr-4 w-6 h-6" />
                Japanese
              </li>
              <li
                className="flex p-2 items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange("VN")}
              >
                <img src={VN} alt="VN" className="mr-4 w-6 h-6" />
                Vietnamese
              </li>
              <li
                className="flex p-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange("EN")}
              >
                <img src={EN} alt="EN" className="mr-4 w-6 h-6" />
                English
              </li>
            </ul>
          </div>
          {/* Responsive Menu*/}
          <div className="lg:hidden">
            <button onClick={handleOpen}>
              <MdOutlineMenu className="text-3xl" />
            </button>
            {/* Dropdown Menu */}
            {open && (
              <div>
                <ul className="bg-white space-y-3 p-4 rounded-md absolute right-10 top-16 z-50">
                  {Menu.map((menu) => (
                    <li key={menu.id} className="text">
                      <a
                        href={menu.link}
                        className="inline-block text-xl p-4 hover:bg-primary hover:text-white w-full rounded-md"
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
