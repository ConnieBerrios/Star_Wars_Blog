import React from "react";
import "../../styles/home.scss";
import { CardPlanets } from "../component/cardPlanets";

export const Planets = () => (
	<>
		<h2 className="my-2 text-light text-center">Planetas de Star-Wars</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPlanets />
			</div>
		</div>
	</>
);
