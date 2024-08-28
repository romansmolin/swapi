import { getServerQuery, getClient } from "@/lib/apollo-client";
import Home from "@/views/Home/home";
import { gql } from "@apollo/client";

const ALL_PEOPLE = gql`
query AllPeople($first: Int, $last: Int) {
	allPeople(first: $first, last: $last) {
		people {
		name
		skinColor
		homeworld {
			name
		}
		}
	}
}
`;

const HomePage: React.FC = async () => {

	const client = getClient();

	const { data } = await client.query({
		query: ALL_PEOPLE,
		variables: {
			"first": 8,
		}
	});

	// const { data } = await getServerQuery(ALL_PEOPLE, { first: 8 })

	console.log('data: ', data)
	return <Home />;
}

export default HomePage;
