import * as React from "react";
import { PureComponent } from "react";
import * as classnames from "classnames";
import Nav from "./nav/nav";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";
import AdditionalInfo from "../additional-info/additional-info";
import Resume from "../resume/resume";
import Publications from "../publications/publications";
import Contacts from "../contacts/contacts";
import Footer from "../footer/footer";

import "./App.global.css";
import css from "./App.module.css";

type AppState = {
	isNavOpened: boolean;
};

export default class App extends PureComponent<AppState> {
	readonly state = {
		isNavOpened: false,
	};

	render() {
		const { isNavOpened } = this.state;

		return (
			<main
				className={classnames(css.container, {
					[css.container_withOpenedNav]: isNavOpened,
				})}
			>
				<button
					className={classnames(css.menuBurger, {
						[css.menuBurger_cross]: isNavOpened,
					})}
					aria-label="Open main menu"
					onClick={this.toggleNav}
				>
					<span></span>
				</button>

				<Nav isOpened={this.state.isNavOpened} />

				<Header />
				<div className={css.content}>
					<AboutMe />
					<AdditionalInfo />
					<Resume />
					<Publications />
					<Contacts />
				</div>
				<Footer />

				<button
					className={css.backToTop}
					// aria-label="Back to top"
				>
					<a href="#header" className={css.link}>
						⮝
					</a>
				</button>
			</main>
		);
	}

	private toggleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({
			isNavOpened: !this.state.isNavOpened,
		});
	};
}
