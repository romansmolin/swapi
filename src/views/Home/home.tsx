import React from 'react'
import HeroSection from './blocks/hero-section'
import { getServerQuery } from '@/lib/apollo-client';
import { GET_ALL_CHARACTERS } from '@/shared/schemas/characters';
import { GlobalSearch, CharacterCard } from '@/components';
import { Selector, Grid } from '@/components/ui';
import { filterOptions } from './const';
interface HomeProps {
	sortType: 'ascending' | 'descending' | undefined
}

const Home: React.FC<HomeProps> = async ({ sortType }) => {
	const { allPeople } = await getServerQuery<AllPeopleI>(GET_ALL_CHARACTERS)

	if (sortType) {
		allPeople.people.sort((a, b) => {
			if (sortType === 'ascending') {
				return a.name.localeCompare(b.name);
			} else if (sortType === 'descending') {
				return b.name.localeCompare(a.name);
			}
			return 0;
		});
	}


	return (
		<>
			<HeroSection />
			<div className="flex justify-center">
				<div className="w-full max-w-md">
					<GlobalSearch allPeople={allPeople} />
				</div>
			</div>
			<div className='w-full'>
				<Selector label='Sort from A to Z' options={filterOptions} />
			</div>
			<Grid>
				{allPeople.people.map(character => (
					<CharacterCard
						key={character.name}
						homeworld={character.homeworld}
						name={character.name}
						gender={character.gender}
						height={character.height}
						id={character.id}
					/>
				))}
			</Grid>
		</>
	)
}

export default Home