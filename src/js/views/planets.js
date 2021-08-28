import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardPlanets } from "../component/cardPlanets";

export const Planets = () => (
	<>
		<h2 className="my-2 text-light text-center">Star-Wars Planets </h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardPlanets />
			</div>
		</div>
		<div className="text-center mt-5">
			<Link to={"/"}>
				<a href="#" className="btn btn-warning text-dark">
					Back to Menu
				</a>
			</Link>
		</div>
	</>
);
