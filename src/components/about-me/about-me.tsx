import * as React from "react";
import { PureComponent } from "react";

import data from "./about-me.fixture.js";

import css from "./about-me.module.css";

type TAboutMeData = {
	name: string;
	link: string;
	icon: string;
};

export default class AboutMe extends PureComponent {
	render() {
		return (
			<section className={css.container} id="about-me">
				<h2>About me</h2>
				<span>PhD Candidate</span>
				<ul className={css.list}>
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

					{data.map(this.renderItems)}
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

	private renderItems(item: TAboutMeData, index: number) {
		return (
			<li key={index}>
				{item.icon}:{" "}
				<a className={css.link} href={item.link}>
					{item.name}
				</a>
			</li>
		);
	}
}
