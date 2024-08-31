import { ApolloClient, DocumentNode, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.API_URL,
        }),
    });
});

export const getServerQuery = async <TData = any>(schema: DocumentNode, variables?: {[key: string]: any}): Promise<TData> => {
    const query = schema
    const { data } = await getClient().query({
		query,
		variables,
		fetchPolicy: "no-cache",
	});

    return data
}

