import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import blond from "../../img/blond.jpg";

export const CardVehicles = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.loadVehicles.map((vehicles, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">{vehicles.name}</h5>
								<p className="card-text">
									<img src={blond} style={{ marginLeft: "20px", width: "88%", height: "100%" }} />
									{/* {vehicles.uid} */}
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo.
								</p>
								<Link to={"./vehicles/" + vehicles.uid}>
									<a href="#" className="btn btn-warning text-dark">
										More Info
									</a>
								</Link>

								<a href="#" className="btn btn-outline-warning float-right">
									<i
										className="fas fa-heart text-warning"
										onClick={() => {
											actions.getFavorites(vehicles.name);
										}}
									/>
								</a>
								{/* <button
									onClick={() => {
										alert(vehicles.name);

										store.favourites.push(vehicles.name);
										console.log("My store array Favourites: ", store.favourites);
									}}>
									Save
								</button> */}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
