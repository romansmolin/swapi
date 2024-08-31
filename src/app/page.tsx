import { Loading } from "@/components/ui";
import Home from "@/views/Home/home";
import { Suspense } from "react";

interface HomePageProps {
	searchParams: {
		sort: 'ascending' | 'descending' | undefined
	}
}

const HomePage: React.FC<HomePageProps> = ({ searchParams }) => {
	const { sort } = searchParams
	return (
		<Suspense fallback={<Loading />}>
			<Home sortType={sort}/>
		</Suspense>
	)
}

export default HomePage;
