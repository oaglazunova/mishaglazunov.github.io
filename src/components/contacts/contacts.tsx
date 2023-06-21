import * as React from "react";
import { PureComponent } from "react";

import css from "./contacts.module.css";

export default class contacts extends PureComponent {
	render() {
		return (
			<section className={css.container} id="contacts">
				<h2>Contacts</h2>
				<ul>
					<li>Location: Maastricht, the Netherlands</li>
					<li>Email: michael.glazunoff@gmail.com</li>
				</ul>
				--Map--
			</section>
		);
	}
}
