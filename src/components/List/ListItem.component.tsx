interface ListItemProps {
	name: string;
}

const ListItem = ({ name }: ListItemProps) => <li>{name}</li>;

export default ListItem;
