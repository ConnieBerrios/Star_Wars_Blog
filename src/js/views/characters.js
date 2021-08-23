import React from "react";
import "../../styles/home.scss";
import { CardCharacters } from "../component/cardCharacters";

export const Characters = () => (
	<>
		<h2 className="my-2 text-light text-center">Personajes Star-Wars</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardCharacters />
			</div>
		</div>
	</>
);
