import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import OurMenu from "./components/OurMenu/OurMenu";
import Blog from "./components/Blog/Blog.jsx";
import Services from "./components/Services/Services.jsx";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Banner />
        <OurMenu />
        <Blog />
        <Services />
      </main>
    </>
  );
};

export default App;
