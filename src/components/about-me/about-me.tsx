import * as React from "react";
import { PureComponent } from "react";
import * as SvgTwitter from "../img/svg/twitter.svg";
import * as SvgLinkedIn from "../img/svg/linkedin.svg";
import * as SvgGitHub from "../img/svg/github.svg";
import * as SvgScholar from "../img/svg/scholar.svg";

import css from "./about-me.module.css";

export default class AboutMe extends PureComponent {
	render() {
		return (
			<section className={css.container} id="about-me">
				<h2>About me</h2>
				<span>PhD Candidate</span>
				<ul>
					<li>CV: [PDF]</li>
					<li>
						Website:{" "}
						<a href="mishaglazunov.github.io">mishaglazunov.github.io</a>
					</li>
					<li>
						Email:{" "}
						<a href="mailto:mikhail.glazunoff@gmail.com">
							mikhail.glazunoff@gmail.com
						</a>
					</li>
					<li>City: Maastricht, the Netherlands</li>
					<li>
						<SvgScholar />: <a href="mishaglazunov.github.io">Scholar</a>
					</li>
					<li>
						<SvgGitHub />: <a href="mishaglazunov.github.io">GitHub</a>
					</li>
					<li>
						<SvgTwitter />: <a href="mishaglazunov.github.io">Twitter</a>
					</li>
					<li>
						<SvgLinkedIn />: <a href="mishaglazunov.github.io">LinkedIn</a>
					</li>
				</ul>
				<div>
					Misha Glazunov is a PhD student at the Delft University of Technology.
					Before, he studied at the Maastricht Univercity. He is a specialist in
					the field of artificial intelligence and machine learning. He is also
					a scientist and a researcher.
				</div>
			</section>
		);
	}
}
