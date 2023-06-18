import * as React from "react";
import { PureComponent } from "react";

import css from "./resume.module.css";

export default class Resume extends PureComponent {
  render() {
    return <section className={css.resume}>Resume</section>;
  }
}
