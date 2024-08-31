import Link from "next/link"
export const filterOptions = [
	{
		label: 'Sort ascending',
		option: <Link href={{
			pathname: '/',
			query: { sort: 'ascending' },
		}}>Sort ascending</Link>
	},
	{
		label: 'Sort descending',
		option: <Link href={{
			pathname: '/',
			query: { sort: 'descending' },
		}}>Sort descending</Link>
	},
	{
		label: 'Default',
		option: <Link href={'/'}>Default</Link>
	},
]