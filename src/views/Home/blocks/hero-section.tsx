import React from 'react'
import { GlobalSearch } from '@/components'

const HeroSection: React.FC = () => {
    return (
        <section>
            <div className="flex justify-center">
                <div className="max-w-xl text-center space-y-5">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Discover the verse of.
                        <strong className="font-extrabold bg-gradient-to-r from-primary-600 to-indigo-900 bg-clip-text text-transparent sm:block">
                            Star Wars.
                        </strong>
                    </h1>

                    <p className="sm:text-xl/relaxed">
                        Extensive character library of Star Wars verse. Find the most legitimate info right now!
                    </p>


                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <GlobalSearch />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection
