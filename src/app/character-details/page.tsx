import { Loading } from "@/components/ui";
import CharacterDetails from "@/views/CharacterDetails/CharacterDetails";
import { Suspense } from "react";

interface CharacterDetailsPageProps {
	searchParams: {
		id: string
	}
}

const CharacterDetailsPage: React.FC<CharacterDetailsPageProps> = ({ searchParams }) => {
	const { id } = searchParams
	return (
		<Suspense fallback={<Loading />}>
			<CharacterDetails personId={id}/>
		</Suspense>
	)
}

export default CharacterDetailsPage;
