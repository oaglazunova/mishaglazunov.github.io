import * as React from "react";
import * as classnames from "classnames";
import { PureComponent } from "react";

import css from "./nav.module.css";

type NavProps = {
	isOpened: boolean;
};

export default class Nav extends PureComponent<NavProps> {
	render() {
		const { isOpened } = this.props;

		return (
			<nav
				className={classnames(css.container, {
					[css.container_opened]: isOpened,
				})}
			>
				<a href="#header" className={css.link}>
					<span>Home</span>
				</a>
				<a href="#about-me" className={css.link}>
					<span>About me</span>
				</a>
				<a
					href="#additional-info"
					className={classnames(css.link, css.link_active)}
				>
					<span>Additional info</span>
				</a>
				<a href="#resume" className={css.link}>
					<span>Resume</span>
				</a>
				<a href="#publications" className={css.link}>
					<span>Publications</span>
				</a>
				<a href="#contacts" className={css.link}>
					<span>Contacts</span>
				</a>
			</nav>
		);
	}
}
