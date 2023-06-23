import * as React from "react";
import { PureComponent } from "react";

import data from "./social.fixture.js";

import css from "./social.module.css";

type TSocialData = {
	name: string;
	link: string;
	icon: string;
};

export default class Social extends PureComponent {
	render() {
		return (
			<ul className={css.container}>{data.map(this.renderSocialButtons)}</ul>
		);
	}

	private renderSocialButtons(item: TSocialData, index: number) {
		return (
			<li key={index}>
				<a className={css.link} href={item.link}>
					<span className="visually-hidden">{item.name}</span>
					{item.icon}
				</a>
			</li>
		);
	}
}
