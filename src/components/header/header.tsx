import * as React from "react";
import { PureComponent } from "react";
import Social from "../social/social";

import css from "./header.module.css";

export default class Header extends PureComponent {
	render() {
		return (
			<header className={css.container} id="header">
				<h1 className={css.title}>Misha Glazunov</h1>
				<div className={css.subTitle}>
					<span>data scientist</span>
					<span>deep learning engineer</span>
					<span>AI researcher</span>
				</div>
				<Social />
			</header>
		);
	}
}
