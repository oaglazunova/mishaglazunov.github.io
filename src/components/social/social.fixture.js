import React from "react";
import { ReactComponent as SvgTwitter } from "./svg/twitter.svg";
import { ReactComponent as SvgLinkedIn } from "./svg/linkedin.svg";
import { ReactComponent as SvgGitHub } from "./svg/github.svg";
import { ReactComponent as SvgScholar } from "./svg/scholar.svg";

const data = [
	{
		name: "Twitter",
		link: "https://twitter.com/MichaelGlazunov",
		icon: <SvgTwitter />,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/michaelglazunov/",
		icon: <SvgLinkedIn />,
	},
	{
		name: "GitHub",
		link: "https://github.com/DigitalDigger",
		icon: <SvgGitHub />,
	},
	{
		name: "Scholar",
		link: "https://scholar.google.com/citations?user=V4yHFRIAAAAJ",
		icon: <SvgScholar />,
	},
];

export default data;
