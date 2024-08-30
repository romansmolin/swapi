import React from 'react'
import HeroSection from './blocks/hero-section'
import { getServerQuery } from '@/lib/apollo-client';
import { GET_ALL_CHARACTERS } from '@/shared/schemas/characters';
import Grid from '@/components/ui/Grid/Grid';
import CharacterCard from '@/components/CharacterCard/CharacterCard';


const Home = async () => {
	const { allPeople } = await getServerQuery<AllPeopleI>(GET_ALL_CHARACTERS)
	return (
		<>
			<HeroSection />
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