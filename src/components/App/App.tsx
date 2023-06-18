import * as React from "react";

import Header from "../header/header";
import AboutMe from "../about-me/about-me";
import AdditionalInfo from "../additional-info/additional-info";
import Resume from "../resume/resume";
import Publications from "../publications/publications";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.App}>
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
