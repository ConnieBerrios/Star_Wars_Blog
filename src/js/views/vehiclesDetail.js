import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import blond from "../../img/blond.jpg";

export const VehiclesDetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.vehiclesDetail(theid);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Name : {store.vehiclesDetail.name}</h1>
			<h3>Model : {store.vehiclesDetail.model}</h3>
			<h3>Manufacturer : {store.vehiclesDetail.manufacturer}</h3>
			<h3>Length : {store.vehiclesDetail.length}</h3>
			<h3>Vehicle Class : {store.vehiclesDetail.vehicle_class}</h3>
			<h3>Max atmosphering speed : {store.vehiclesDetail.max_atmosphering_speed}</h3>
			<img src={blond} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />

			<div className="text-center mt-5">
				<Link to={"/vehicles"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Vehicles
					</a>
				</Link>
			</div>
		</div>
	);
};
// "model": "Digger Crawler",
//             "vehicle_class": "wheeled",
//             "manufacturer": "Corellia Mining Corporation",
//             "cost_in_credits": "150000",
//             "length": "36.8 ",
//             "crew": "46",
//             "passengers": "30",
//             "max_atmosphering_speed": "30",
//             "cargo_capacity": "50000",
//             "consumables": "2 months",
//             "films": [],
//             "pilots": [],
//             "created": "2020-09-17T17:46:31.415Z",
//             "edited": "2020-09-17T17:46:31.415Z",
//             "name": "Sand Crawler",
