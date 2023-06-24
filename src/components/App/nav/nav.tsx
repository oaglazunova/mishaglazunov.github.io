import * as React from "react";
import * as classnames from "classnames";
import { PureComponent } from "react";

import css from "./nav.module.css";

type NavProps = {
	isOpened: boolean;
	toggleActiveLink: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default class Nav extends PureComponent<NavProps> {
	render() {
		const { isOpened, toggleActiveLink } = this.props;

		return (
			<nav
				className={classnames(css.container, {
					[css.container_opened]: isOpened,
				})}
			>
				<a href="#header" className={css.link} onClick={toggleActiveLink}>
					<span>Home</span>
				</a>
				<a href="#about-me" className={css.link} onClick={toggleActiveLink}>
					<span>About me</span>
				</a>
				<a
					href="#additional-info"
					className={css.link}
					onClick={toggleActiveLink}
				>
					<span>Additional info</span>
				</a>
				<a href="#resume" className={css.link} onClick={toggleActiveLink}>
					<span>Resume</span>
				</a>
				<a href="#publications" className={css.link} onClick={toggleActiveLink}>
					<span>Publications</span>
				</a>
				<a href="#contacts" className={css.link} onClick={toggleActiveLink}>
					<span>Contacts</span>
				</a>
			</nav>
		);
	}
}
