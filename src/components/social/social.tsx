import * as React from "react";
import { PureComponent } from "react";

import css from "./social.module.css";

export default class Social extends PureComponent {
	render() {
		return (
			<ul className={css.container}>
				<li>
					<a href="https://twitter.com/">
						<i className="fab fa-twitter" aria-hidden="true"></i>
						<span className="visually-hidden">Twitter</span>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/">
						<i className="fab fa-linkedin" aria-hidden="true"></i>
						<span className="visually-hidden">LinkedIn</span>
					</a>
				</li>
				<li>
					<a href="https://www.github.com/">
						<i className="fab fa-linkedin" aria-hidden="true"></i>
						<span className="visually-hidden">GitHub</span>
					</a>
				</li>
				<li>
					<a href="https://www.scholar.com/">
						<i className="fab fa-linkedin" aria-hidden="true"></i>
						<span className="visually-hidden">Scholar</span>
					</a>
				</li>
			</ul>
		);
	}
}
