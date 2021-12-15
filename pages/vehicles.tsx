import { Fragment, useEffect, useState } from "react";
import type { NextPage } from "next";

import List from "../src/components/List/List.component";

interface Vehicle {
	uid: string;
	name: string;
	url: string;
}

const VehiclesPage: NextPage = () => {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);

	useEffect(() => {
		getVehicles();
	}, []);

	const getVehicles = async () => {
		const response = await fetch("https://www.swapi.tech/api/vehicles");
		const data = await response.json();
		const vehiclesResult = data.results;
		setVehicles(vehiclesResult);
	};

	return (
		<Fragment>
			<h1>This is the vehicles client page</h1>
			{vehicles.length > 0 ? <List items={vehicles} /> : <p>Cargando...</p>}
		</Fragment>
	);
};

export default VehiclesPage;
