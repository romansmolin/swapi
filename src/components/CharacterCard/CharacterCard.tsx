import Link from 'next/link'
import React from 'react'

const CharacterCard = () => {
    return (
        <div className="block rounded-lg shadow-lg text-center">
            <div className="p-6 space-y-5">
                <h5 className="text-xl font-bold tracking-wide text-primary-800">
                    Explore the hidden beauty
                </h5>

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