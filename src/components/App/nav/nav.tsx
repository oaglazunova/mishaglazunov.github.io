import * as React from "react";
import { PureComponent } from "react";

import css from "./nav.module.css";

export default class Nav extends PureComponent {
	render() {
		return (
			<nav className={css.container}>
				<a href="#header" className={css.link}>
					Home
				</a>
				<a href="#about-me" className={css.link}>
					About me
				</a>
				<a href="#additional-info" className={css.link}>
					Additional info
				</a>
				<a href="#resume" className={css.link}>
					Resume
				</a>
				<a href="#publications" className={css.link}>
					Publications
				</a>
				<a href="#contacts" className={css.link}>
					Contacts
				</a>
			</nav>
		);
	}
}
