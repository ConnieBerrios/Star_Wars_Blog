import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardVehicles } from "../component/cardVehicles";

export const Vehicles = () => (
	<>
		<h2 className="my-3 text-light text-center">Star Wars Vehicles</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardVehicles />
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
