import * as React from "react";
import { PureComponent } from "react";
/* import { google } from "@react-google-maps/api"; */

import css from "./contacts.module.css";

export default class contacts extends PureComponent {
	/* componentDidMount() {
		let map: google.maps.Map;
		const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

		function initMap(): void {
			map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
				center,
				zoom: 8,
			});
		}

		function initMap(): void {
			// 'google' could be accessed from 'window' object
			const map = new window.google.maps.Map(
				document.getElementById("googleMap") as HTMLElement,
				{
					zoom: 14,
					center: { lat: 30, lng: -110 },
				}
			);
			// putting a marker on it
			const marker = new window.google.maps.Marker({
				position: { lat: 30, lng: -110 },
				map: map,
			});
		}

		initMap();
	}
 */
	render() {
		return (
			<section className={css.container} id="contacts">
				<h2>Contacts</h2>
				<ul>
					<li>Location: Maastricht, the Netherlands</li>
					<li>Email: michael.glazunoff@gmail.com</li>
				</ul>
				{/* <div id="map"></div>
				<div id="googleMap" /> */}
			</section>
		);
	}
}
