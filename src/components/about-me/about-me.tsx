import * as React from "react";
import { PureComponent } from "react";

import css from "./about-me.module.css";

export default class AboutMe extends PureComponent {
  render() {
    return (
      <section className={css.aboutMe}>
        <h2>About me</h2>
        <span>Scientist & AI Specialist</span>
        <ul>
          <li>CV: [PDF]</li>
          <li>Website: mishaglazunov.github.io</li>
          <li>Email: mikhail.glazunoff@gmail.com</li>
          <li>City: Maastricht, the Netherlands</li>
          <li>scholar: Scholar</li>
          <li>github: GitHub</li>
          <li>twitter: Twitter</li>
          <li>linkedin: LinkedIn</li>
        </ul>
        <div>
          Misha Glazunov is a PhD student at the Delft University of Technology.
          Before, he studied at the Maastricht Univercity. He is a specialist in
          the field of artificial intelligence and machine learning. He is also
          a scientist and a researcher.
        </div>
      </section>
    );
  }
}
