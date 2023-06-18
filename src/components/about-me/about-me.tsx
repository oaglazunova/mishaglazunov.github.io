import * as React from "react";
import { PureComponent } from "react";

import css from "./about-me.module.css";

export default class AboutMe extends PureComponent {
  render() {
    return <section className={css.aboutMe}>About Me</section>;
  }
}
