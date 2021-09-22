import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import vehiclememe from "../../img/vehiclesmeme2.jpg";

export const VehiclesDetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.vehiclesDetail(theid);
	}, []);

	return (
		<>
			<div className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938", alignContent: "center" }}>
				<table className="table table-bordered table-dark">
					<tbody>
						<tr>
							<th colSpan="2">
								<img src={vehiclememe} style={{ margin: "20px", width: "60%", height: "100%" }} />
							</th>
						</tr>
						<tr>
							<th scope="row">Name </th>
							<td>{store.vehiclesDetail.name}</td>
						</tr>
						<tr>
							<th scope="row">Model</th>
							<td>{store.vehiclesDetail.model}</td>
						</tr>
						<tr>
							<th scope="row">Manufacturer</th>
							<td>{store.vehiclesDetail.manufacturer}</td>
						</tr>
						<tr>
							<th scope="row">Length</th>
							<td>{store.vehiclesDetail.length}</td>
						</tr>
						<tr>
							<th scope="row">Vehicle Class</th>
							<td>{store.vehiclesDetail.vehicle_class}</td>
						</tr>
						<tr>
							<th scope="row">Max Atmosphering Speed</th>
							<td>{store.vehiclesDetail.max_atmosphering_speed}</td>
						</tr>
					</tbody>
				</table>
				<Link to={"/vehicles"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Vehicles
					</a>
				</Link>
			</div>
		</>
	);
};
