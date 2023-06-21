import * as React from "react";
import { PureComponent } from "react";

import css from "./timeline.module.css";

export default class Timeline extends PureComponent {
	render() {
		return (
			<div className={css.container}>
				<span className={css.title}>PhD student</span>
				<span className={css.date}>2019 - now</span>
				<span className={css.subtitle}>Maastricht University</span>
				<span className={css.description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
					nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam
					nisl nunc vitae nisl. Donec auctor, nisl eget ultricies aliquam, nunc
					nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.
				</span>
			</div>
		);
	}
}
