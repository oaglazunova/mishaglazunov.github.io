import * as React from "react";
import { PureComponent } from "react";

import css from "./footer.module.css";

export default class Footer extends PureComponent {
  render() {
    return <footer className={css.footer}>Footer</footer>;
  }
}
