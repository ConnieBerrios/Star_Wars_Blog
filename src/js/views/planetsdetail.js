import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Planetsdetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.planetsDetail(theid);
	}, []);

	return (
		<div>
			<h1>Name: {store.planetsDetail.name}</h1>
			<h1>Diameter: {store.planetsDetail.diameter}</h1>
			<h1>Population: {store.planetsDetail.population}</h1>
			<h1>Terrain: {store.planetsDetail.terrain}</h1>
		</div>
	);
};
