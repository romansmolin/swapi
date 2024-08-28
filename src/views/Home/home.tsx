import React from 'react'
import HeroSection from './blocks/hero-section'
import { gql } from '@apollo/client';
import { getServerQuery } from '@/lib/apollo-client';

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

const Home = async () => {

const { data } = await getServerQuery(ALL_PEOPLE, { first: 8 })

console.log('data: ', data)
  return (
    <>
      <HeroSection />
    </>
  )
}

export default Home