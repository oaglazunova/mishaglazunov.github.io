import * as React from "react";
import "./App.styl";

import Header from "./components/header/header";
import AboutMe from "./components/about-me/about-me";
import AdditionalInfo from "./components/additional-info/additional-info";
import Resume from "./components/resume/resume";
import Publications from "./components/publications/publications";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <AdditionalInfo />
      <Resume />
      <Publications />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
