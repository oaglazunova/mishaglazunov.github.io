import * as React from "react";
import * as cn from "classnames";
import { PureComponent } from "react";

import css from "./header.module.css";

export default class Header extends PureComponent {
  render() {
    return <header className={css.header}>Header</header>;
  }
}
