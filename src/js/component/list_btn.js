import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="dropdown show">
				<a
					className="btn btn-warning dropdown-toggle dropleft"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</a>

				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</div>
	);
};