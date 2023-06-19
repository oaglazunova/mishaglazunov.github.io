import * as React from "react";
import { PureComponent } from "react";
import Social from "../social/social";

import css from "./header.module.css";

export default class Header extends PureComponent {
	render() {
		return (
			<header className={css.container}>
				<h1>Misha Glazunov</h1>
				<span>Scientist & AI Specialist</span>
				<Social />
			</header>
		);
	}
}
