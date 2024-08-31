import Home from "@/views/Home/home";

interface HomePageProps {
	searchParams: {
		sort: 'ascending' | 'descending' | undefined
	}
}

const HomePage: React.FC<HomePageProps> = ({ searchParams }) => {
	const { sort } = searchParams
	return <Home sortType={sort}/>;
}

export default HomePage;
