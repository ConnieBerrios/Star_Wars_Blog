import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planetsmeme from "../../img/planetsmeme.jpg";

export const Planetsdetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.planetsDetail(theid);
	}, []);

	return (
		<div className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938", alignContent: "center" }}>
			<table className="table table-bordered table-dark">
				<tbody>
					<tr>
						<th colSpan="2">
							<img src={planetsmeme} style={{ margin: "20px", width: "60%", height: "100%" }} />
						</th>
					</tr>
					<tr>
						<th scope="row">Name </th>
						<td>{store.planetsDetail.name}</td>
					</tr>
					<tr>
						<th scope="row">Diameter</th>
						<td>{store.planetsDetail.diameter}</td>
					</tr>
					<tr>
						<th scope="row">Population </th>
						<td>{store.planetsDetail.population}</td>
					</tr>
					<tr>
						<th scope="row">Terrain </th>
						<td>{store.planetsDetail.terrain}</td>
					</tr>
				</tbody>
			</table>
			<Link to={"/planets"}>
				<a href="#" className="btn btn-warning text-dark">
					Back to Planets
				</a>
			</Link>
		</div>
	);
};
