import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import logo3 from "../../img/logo3.png";

import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setOpen] = useState(false);
	const toggle = () => setOpen(!dropdownOpen);

	return (
		<div className="Container">
			<nav className="navbar navbar-dark bg-dark" style={{ paddingRight: "10px" }}>
				<Link to="/">
					<img src={logo3} style={{ marginLeft: "20px", width: "80px", height: "40px" }} />
				</Link>

				<ButtonDropdown isOpen={dropdownOpen} size="sm" toggle={toggle}>
					<DropdownToggle caret>
						{" "}
						Favorites
						<i className=" fas fa-heart" style={{ marginLeft: "10px", color: "#C1980C" }} />
					</DropdownToggle>
					<DropdownMenu right style={{ width: "200px" }}>
						{store.favorites.map((favorito, posicion) => {
							return (
								<DropdownItem key={posicion}>
									{favorito}

									<i
										style={{ color: "red" }}
										className="fas fa-trash-alt float-right"
										onClick={() => {
											actions.deleteFavorites(favorito);
										}}
									/>
								</DropdownItem>
							);
						})}
						{/* <DropdownItem header>Header</DropdownItem>
						<DropdownItem disabled>Action</DropdownItem>
						<DropdownItem>Another Action</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Another Action</DropdownItem> */}
					</DropdownMenu>
				</ButtonDropdown>
			</nav>
		</div>
	);
};
