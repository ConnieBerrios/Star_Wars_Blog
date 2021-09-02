const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			loadPeople: [],
			personDetail: {},
			loadVehicles: [],
			vehiclesDetail: {},
			loadPlanets: [],
			planetsDetail: {}
		},
		actions: {
			loadPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPeople: result.results });
						console.log("load all people", store.loadPeople);
					})
					.catch(error => console.log("error", error));
			},
			getPersonDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ personDetail: result.result.properties });
						console.log("personDetail", store.personDetail);
					})
					.catch(error => console.log("error", error));
			},
			loadPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPlanets: result.results });
						console.log("load all planets", store.loadPlanets);
					})
					.catch(error => console.log("error", error));
			},
			planetsDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ planetsDetail: result.result.properties });
						console.log("planetsDetail", store.planetsDetail);
					})
					.catch(error => console.log("error", error));
			},
			loadVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadVehicles: result.results });
						console.log("load all vehicles", store.loadVehicles);
					})
					.catch(error => console.log("error", error));
			},
			vehiclesDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ vehiclesDetail: result.result.properties });
						console.log("vehiclesDetail", store.vehiclesDetail);
					})
					.catch(error => console.log("error", error));
			},

			getFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			deleteFavorites: posicion => {
				const store = getStore();
				const favoriteDeleted = store.favorites.filter(key => key !== posicion);
				setStore({ favorites: favoriteDeleted });
			}
		}
	};
};

export default getState;
