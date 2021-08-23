import React from "react";
import "../../styles/home.scss";
import { CardVehicles } from "../component/cardVehicles";

export const Vehicles = () => (
	<>
		<h2 className="my-2 text-light text-center">Vehículos y Naves de Star-Wars</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardVehicles />
			</div>
		</div>
	</>
);
