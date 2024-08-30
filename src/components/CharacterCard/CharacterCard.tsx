import Link from 'next/link'
import React from 'react'
import { Button } from '../ui'

const CharacterCard: React.FC<Character> = ({ name, gender, height, homeworld, id }) => {
    return (
        <div className="block rounded-lg shadow-lg text-center">
            <div className="p-6 space-y-5">
                <h5 className="text-xl font-bold tracking-wide text-primary-800">
                    {name}
                </h5>

                <div className="text-sm ">
                    <p>
                        <span className="font-semibold text-primary-800">Homeworld: </span>
                        {homeworld.name}
                    </p>
                    <p>
                        <span className="font-semibold text-primary-800">Gender: </span>
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </p>
                    <p>
                        <span className="font-semibold text-primary-800">Height: </span>
                        {height} cm
                    </p>
                </div>

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