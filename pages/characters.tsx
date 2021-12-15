import { Fragment } from "react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import List from "../src/components/List/List.component";

interface Character {
	uid: string;
	name: string;
	url: string;
}

const CharactersPage: NextPage = ({
	characters,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<Fragment>
			<h1>This is the characters SSG page</h1>
			<List items={characters} />
		</Fragment>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://www.swapi.tech/api/people");
	const data = await response.json();
	const characters: Character[] = data.results;

	return {
		props: {
			characters,
		},
	};
};

export default CharactersPage;
