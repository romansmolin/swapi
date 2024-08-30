import { getServerQuery } from '@/lib/apollo-client'
import { GET_CHARACTER_BY_ID } from '@/shared/schemas/characters'
import React from 'react'
import DetailsTable from './blocks/details-table'

interface CharacterDetailsProps {
    personId: string
}

const CharacterDetails: React.FC<CharacterDetailsProps> = async ({ personId }) => {
    const { person } = await getServerQuery<CharacterEntity>(GET_CHARACTER_BY_ID, { personId })

    return (
        <>
            <h2 className='text-5xl uppercase font-extrabold bg-gradient-to-r from-primary-600 to-indigo-900 bg-clip-text text-transparent text-center'>{person.name}</h2>
            <DetailsTable person={person}/>
        </>
    )
}

export default CharacterDetails