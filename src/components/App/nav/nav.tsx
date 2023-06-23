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
				<a href="#header" className={css.link} onClick={this.toggleActiveLink}>
					<span>Home</span>
				</a>
				<a
					href="#about-me"
					className={css.link}
					onClick={this.toggleActiveLink}
				>
					<span>About me</span>
				</a>
				<a
					href="#additional-info"
					className={css.link}
					onClick={this.toggleActiveLink}
				>
					<span>Additional info</span>
				</a>
				<a href="#resume" className={css.link} onClick={this.toggleActiveLink}>
					<span>Resume</span>
				</a>
				<a
					href="#publications"
					className={css.link}
					onClick={this.toggleActiveLink}
				>
					<span>Publications</span>
				</a>
				<a
					href="#contacts"
					className={css.link}
					onClick={this.toggleActiveLink}
				>
					<span>Contacts</span>
				</a>
			</nav>
		);
	}

	private toggleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const target = e.target as HTMLAnchorElement;
		const activeLink = document.querySelector(`.${css.link_active}`);
		if (activeLink) {
			activeLink.classList.remove(css.link_active);
		}
		target.classList.add(css.link_active);
	};
}
