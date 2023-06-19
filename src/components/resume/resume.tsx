import * as React from "react";
import { PureComponent } from "react";
import Timeline from "./timeline/timeline";

import { education, experience } from "./resume.fixture";

import css from "./resume.module.css";

export default class Resume extends PureComponent {
	render() {
		return (
			<section className={css.container}>
				<h2>Resume</h2>

				<div>
					<h3>Education</h3>
					{education.map(this.renderTimeline)}
				</div>

				<div>
					<h3>Experience</h3>
					<Timeline />
				</div>
			</section>
		);
	}

	renderTimeline = (item, index) => {
		return <Timeline key={index} {...item} />;
	};
}
