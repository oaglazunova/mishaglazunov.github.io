import * as React from "react";
import { PureComponent } from "react";

import css from "./publications.module.css";

export default class Publications extends PureComponent {
  render() {
    return <section className={css.publications}>Publications</section>;
  }
}
