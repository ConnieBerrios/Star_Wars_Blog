import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/characters";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { CharactersDetail } from "./views/charactersDetail";
import { Planetsdetail } from "./views/planetsdetail";
import { VehiclesDetail } from "./views/vehiclesDetail";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/planets">
							<Planets />
						</Route>

						{/* <Route exact path="/planetsdetail">
							<Planetsdetail />
						</Route> */}

						<Route exact path="/planetsdetail/:theid">
							<Planetsdetail />
						</Route>

						<Route exact path="/characters/">
							<Characters />
						</Route>

						{/* <Route exact path="/charactersdetail/">
							<CharactersDetail />
						</Route> */}

						<Route exact path="/charactersdetail/:theid">
							<CharactersDetail />
						</Route>

						<Route exact path="/vehicles">
							<Vehicles />
						</Route>

						<Route exact path="/vehicles/:theid">
							<VehiclesDetail />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
