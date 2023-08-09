import * as React from "react";
import { PureComponent } from "react";
import * as classnames from "classnames";
import animateScrollTo from "animated-scroll-to";

import Nav from "./nav/nav";
import Header from "../header/header";
import AboutMe from "../about-me/about-me";
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

				<Nav
					isOpened={this.state.isNavOpened}
					toggleActiveLink={this.toggleActiveLink}
				/>

				<Header />
				<div className={css.content}>
					<AboutMe />
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

	private toggleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
		/* 
		const target = e.target as HTMLAnchorElement;
		const activeLink = document.querySelector(`.${css.link_active}`);
		if (activeLink) {
			activeLink.classList.remove(css.link_active);
		}
		target.classList.add(css.link_active); */

		const sectionName = (e.target as HTMLAnchorElement).getAttribute("href");

		this.setState({
			isNavOpened: false,
		});

		if (sectionName !== null) {
			animateScrollTo(
				document.getElementById(sectionName.substring(1)) as HTMLElement,
				{
					speed: 500,
				}
			);
		}
	};
}
