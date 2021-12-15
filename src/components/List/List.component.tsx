import ListItem from "./ListItem.component";

interface Item {
	uid: string;
	name: string;
	url: string;
}

interface ListProps {
	items: Item[];
}

const List = ({ items }: ListProps) => {
	return (
		<ul>
			{items.map(item => (
				<ListItem key={item.uid} name={item.name} />
			))}
		</ul>
	);
};

export default List;
