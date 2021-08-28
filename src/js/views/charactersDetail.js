import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import blond from "../../img/blond.jpg";

export const CharactersDetail = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getPersonDetail(theid);
	}, []);

	return (
		<div>
			<h1>Name: {store.personDetail.name}</h1>
			<h1>Hair Color: {store.personDetail.hair_color}</h1>
			<h1>Skin Color: {store.personDetail.skin_color}</h1>
			<h1>Eye Color: {store.personDetail.eye_color}</h1>
			<img src={blond} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />
		</div>
	);
};
// "height": "182",
//             "mass": "77",
//             "hair_color": "auburn, white",
//             "skin_color": "fair",
//             "eye_color": "blue-gray",
//             "birth_year": "57BBY",
//             "gender": "male",
//             "created": "2021-08-27T10:41:09.830Z",
//             "edited": "2021-08-27T10:41:09.830Z",
//             "name": "Obi-Wan Kenobi",
//             "homeworld": "https://www.swapi.tech/api/planets/20",
