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
		<div id="divDetalle" className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938" }}>
			<h1>Name : {store.personDetail.name}</h1>
			<h3>Hair Color : {store.personDetail.hair_color}</h3>
			<h3>Skin Color : {store.personDetail.skin_color}</h3>
			<h3>Eye Color : {store.personDetail.eye_color}</h3>
			<h3>Height : {store.personDetail.height}</h3>
			<h3>Birth Year : {store.personDetail.birth_year}</h3>
			<img src={blond} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />

			<div className="text-center mt-5">
				<Link to={"/characters"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Characters
					</a>
				</Link>
			</div>
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
