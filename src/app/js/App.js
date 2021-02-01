import React from "react";
import "../sass/App.scss";
import Header from "./Header";
import SectionHero from "./SectionHero";
import SectionFeatures from "./SectionFeatures";
import SectionArticles from "./SectionArticles";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionHero />
      <SectionFeatures />
      <SectionArticles />
      <Footer />
    </div>
  );
}

export default App;
