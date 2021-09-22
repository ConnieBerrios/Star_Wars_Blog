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
		<div className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938", alignContent: "center" }}>
			<table className="table table-bordered table-dark">
				<tbody>
					<tr>
						<th colSpan="2">
							<img src={blond} style={{ margin: "20px", width: "40%", height: "40%" }} />
						</th>
					</tr>
					<tr>
						<th scope="row">Name </th>
						<td>{store.personDetail.name}</td>
					</tr>
					<tr>
						<th scope="row">Hair Color </th>
						<td>{store.personDetail.hair_color}</td>
					</tr>
					<tr>
						<th scope="row">Skin Color </th>
						<td>{store.personDetail.skin_color}</td>
					</tr>
					<tr>
						<th scope="row">Eye Color </th>
						<td>{store.personDetail.eye_color}</td>
					</tr>
					<tr>
						<th scope="row">Height </th>
						<td>{store.personDetail.height}</td>
					</tr>
					<tr>
						<th scope="row">Birth Year </th>
						<td>{store.personDetail.birth_year}</td>
					</tr>
					<tr>
						<th scope="row">Homeworld </th>
						<td>
							<a href={store.personDetail.homeworld}>{store.personDetail.homeworld}</a>
						</td>
					</tr>
				</tbody>
			</table>
			<Link to={"/characters"}>
				<a href="#" className="btn btn-warning text-dark">
					Back to Characters
				</a>
			</Link>
		</div>
	);
};
