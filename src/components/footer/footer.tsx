import * as React from "react";
import { PureComponent } from "react";
import Social from "../social/social";

import css from "./footer.module.css";

export default class Footer extends PureComponent {
	render() {
		return (
			<footer className={css.container}>
				<h2>Misha Glazunov</h2>
				<Social />
				<div>
					© Copyright <strong>Misha Glazunov</strong>. All Rights Reserved.
					Photo by{" "}
					<a
						href="https://oaglazunova.github.io/"
						aria-label="Photographer's website"
						rel="noopener noreferrer"
					>
						Olga Glazunova
					</a>
					.
					<br />
					Designed by{" "}
					<a
						href="https://oaglazunova.github.io/"
						aria-label="Web developer's website"
						rel="noopener noreferrer"
					>
						Olga Glazunova
					</a>
				</div>
			</footer>
		);
	}
}
