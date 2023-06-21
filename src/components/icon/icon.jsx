import * as React from "react";
import { PureComponent } from "react";
import * as PropTypes from "prop-types";
import * as classnames from "classnames";

const CN_ICON = "icon";

import "./icon.global.styl";

type TIconProps = {
	name: string;
	className?: string;
};

class Icon extends PureComponent<TIconProps> {
	static propTypes = {
		name: PropTypes.string.isRequired,
		className: PropTypes.string,
	};

	render() {
		const { name } = this.props;
		const className = classnames(CN_ICON, name, this.props.className);

		return (
			<svg className={className}>
				<use xlinkHref={`#${this.props.name}`} />
			</svg>
		);
	}
}

export default Icon;
