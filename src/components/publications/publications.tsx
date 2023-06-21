import * as React from "react";
import { PureComponent } from "react";

import css from "./publications.module.css";

export default class Publications extends PureComponent {
	render() {
		return (
			<section className={css.container} id="publications">
				<h2>Publications</h2>
				<ul>
					<li>
						Glazunov, M., &amp; Mylopoulos, J. (2019).{" "}
						<a href="https://link.springer.com/chapter/10.1007/978-3-030-17771-3_6">
							A Framework for the Analysis of the Impact of AI on Software
							Engineering
						</a>
						. In{" "}
						<i>
							Proceedings of the 41st International Conference on Software
							Engineering: Software Engineering in Practice Track
						</i>{" "}
						(pp. 51-60). IEEE Press.
					</li>
					<li>
						Glazunov, M., &amp; Mylopoulos, J. (2019).{" "}
						<a href="https://link.springer.com/chapter/10.1007/978-3-030-17771-3_6">
							A Framework for the Analysis of the Impact of AI on Software
							Engineering
						</a>
						. In{" "}
						<i>
							Proceedings of the 41st International Conference on Software
							Engineering: Software Engineering in Practice Track
						</i>{" "}
						(pp. 51-60). IEEE Press.
					</li>
				</ul>
			</section>
		);
	}
}
