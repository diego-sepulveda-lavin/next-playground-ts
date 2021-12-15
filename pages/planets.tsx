import { Fragment } from "react";
import type {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from "next";

import List from "../src/components/List/List.component";

interface Planet {
	uid: string;
	name: string;
	url: string;
}

const PlanetsPage: NextPage = ({
	planets,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<Fragment>
			<h1>This is the planets SSR page</h1>
			<List items={planets} />
		</Fragment>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch("https://www.swapi.tech/api/planets");
	const data = await response.json();
	const planets: Planet[] = data.results;

	return {
		props: {
			planets,
		},
	};
};

export default PlanetsPage;
