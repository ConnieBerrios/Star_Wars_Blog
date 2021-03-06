import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import planetsmeme from "../../img/planetsmeme.jpg";

export const CardPlanets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.loadPlanets.map((planets, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">{planets.name}</h5>
								<p className="card-text">
									<img
										src={planetsmeme}
										style={{
											marginLeft: "20px",
											width: "88%",
											height: "100%",
											marginTop: "20px",
											marginBottom: "20px"
										}}
									/>
									{/* {planets.uid} */}
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam.
								</p>
								<Link to={"/planetsdetail/" + planets.uid}>
									<button className="btn btn-warning">More Info</button>
								</Link>

								<a href="#" className="btn btn-outline-warning float-right">
									<i
										className="fas fa-heart text-warning"
										onClick={() => {
											actions.getFavorites(planets.name);
										}}
									/>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
