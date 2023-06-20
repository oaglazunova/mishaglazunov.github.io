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
		<div className={css.container}>
			<Header />
			<AboutMe />
			<AdditionalInfo />
			<Resume />
			<Publications />
			<Contacts />
			<Footer />

			<button
				className={css.backToTop}
				// onClick={this.backToTop}
				aria-label="Back to top"
			>
				<span className={css.arrow} />
			</button>
		</div>
	);
}

export default App;
