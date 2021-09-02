import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { CardCharacters } from "../component/cardCharacters";

export const Characters = () => (
	<>
		<h2 id="titulo1" className="my-2 text-light text-center">
			Star Wars Characters
		</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap">
				<CardCharacters />
			</div>
		</div>
		<div className="text-center mt-5">
			<Link to={"/"}>
				<a href="#" className="btn btn-warning text-dark">
					Back to Menu
				</a>
			</Link>
		</div>
	</>
);
