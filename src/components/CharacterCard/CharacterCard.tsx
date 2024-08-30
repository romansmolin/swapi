import Link from 'next/link'
import React from 'react'

const CharacterCard: React.FC<Character> = ({ name, gender, height, homeworld }) => {
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

                <Link
                    href="#"
                    className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out bg-primary-700 hover:bg-primary-800">
                    Read now
                </Link>
            </div>
        </div>

    )
}

export default CharacterCard