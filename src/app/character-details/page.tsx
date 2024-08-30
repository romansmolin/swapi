import CharacterDetails from "@/views/CharacterDetails/CharacterDetails";

interface CharacterDetailsPageProps {
	searchParams: {
		id: string
	}
}

const CharacterDetailsPage: React.FC<CharacterDetailsPageProps> = ({ searchParams }) => {
	const { id } = searchParams
	return <CharacterDetails personId={id}/>;
}

export default CharacterDetailsPage;
