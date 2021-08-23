import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Link } from "react-router-dom";
import fondo_personajes from "../../img/fondo_personajes.jpg";
import fondo_planetas from "../../img/fondo_planetas.jpg";
import fondo_naves from "../../img/fondo_naves.jpg";

export const Home = () => (
	<>
		<div className="text-center mt-3">
			<Link to="/characters">
				<img src={fondo_personajes} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />
			</Link>
			<Link to="/planets">
				<img src={fondo_planetas} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />
			</Link>
			<Link to="/vehicles">
				<img src={fondo_naves} style={{ marginLeft: "20px", width: "20%", height: "40%" }} />
			</Link>
		</div>
	</>
);
