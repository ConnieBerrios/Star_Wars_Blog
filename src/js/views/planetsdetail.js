import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import blond from "../../img/blond.jpg";

export const Planetsdetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.planetsDetail(theid);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Name: {store.planetsDetail.name}</h1>
			<h1>Diameter: {store.planetsDetail.diameter}</h1>
			<h1>Population: {store.planetsDetail.population}</h1>
			<h1>Terrain: {store.planetsDetail.terrain}</h1>
			<img src={blond} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />

			<div className="text-center mt-5">
				<Link to={"/planets"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Planets
					</a>
				</Link>
			</div>
		</div>
	);
};
