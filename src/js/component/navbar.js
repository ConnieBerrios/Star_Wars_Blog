import React, { useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import logo3 from "../../img/logo3.png";

import { Link } from "react-router-dom";

export const Navbar = () => {
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
						<i className="fas fa-heart" style={{ color: "#C1980C" }} />
					</DropdownToggle>
					<DropdownMenu right>
						<DropdownItem header>Header</DropdownItem>
						<DropdownItem disabled>Action</DropdownItem>
						<DropdownItem>Another Action</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Another Action</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
			</nav>
		</div>
	);
};
