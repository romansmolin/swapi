import React from 'react'
import { Button } from '../ui'

interface CharacterCardProps {
    name: string;
    height: number;
    gender: string;
    homeworld: Homeworld;
    id: string;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ name, gender, height, homeworld, id }) => {
    return (
        <div className="rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
            <div className="p-6 space-y-5 flex-grow">
                <h5 className="text-xl font-bold tracking-wide text-primary-800">
                    {name}
                </h5>
            </div>

            <div className="text-sm">
                <p>
                    <span className="font-semibold text-primary-800">Homeworld: </span>
                    {homeworld?.name ?? 'N/A'}
                </p>
                <p>
                    <span className="font-semibold text-primary-800">Gender: </span>
                    {gender ? gender.charAt(0).toUpperCase() + gender.slice(1) : 'N/A'}</p>
                <p>
                    <span className="font-semibold text-primary-800">Height: </span>
                    {height ?? 'N/A'} cm
                </p>
            </div>

            <div className="p-6">
                <Button
                    isLink
                    href={{
                        pathname: '/character-details',
                        query: { id: id },
                    }}
                >
                    Read now
                </Button>
            </div>
        </div>
    )
}

export default CharacterCard
