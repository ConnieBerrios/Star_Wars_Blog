import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link } from "react-router-dom";
import fondo_personajes from "../../img/fondo_personajes.jpg";
import fondo_planetas from "../../img/fondo_planetas.jpg";
import fondo_naves from "../../img/fondo_naves.jpg";

export const Home = () => (
	<>
		<div className="container">
			<div className="row">
				<div className="col">
					<Link to="/characters">
						<div className="text-center">
							<h2>Characters</h2>
							<img
								src={fondo_personajes}
								style={{ marginLeft: "5px", marginBottom: "15px", marginTop: "10px" }}
							/>
						</div>
					</Link>
				</div>
				<div className="col">
					<Link to="/planets">
						<div className="text-center">
							<h2>Planets</h2>
							<img
								src={fondo_planetas}
								style={{ marginLeft: "5px", marginBottom: "15px", marginTop: "10px" }}
							/>
						</div>
					</Link>
				</div>
				<div className="col">
					<Link to="/vehicles">
						<div className="text-center">
							<h2>Vehicles</h2>
							<img
								src={fondo_naves}
								style={{ marginLeft: "5px", marginBottom: "15px", marginTop: "10px" }}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</>
);
