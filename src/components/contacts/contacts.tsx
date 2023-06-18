import * as React from "react";
import { PureComponent } from "react";

import css from "./contacts.module.css";

export default class contacts extends PureComponent {
  render() {
    return <section className={css.contacts}>Contacts</section>;
  }
}
