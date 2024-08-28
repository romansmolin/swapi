import React from 'react'

const Header: React.FC = () => {
    return (
        <header>
            <div className="mx-auto shadow-md flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block" href="#">
                    <span className="sr-only">Home</span>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
                        SWAPI
                    </h2>
                </a>
            </div>
        </header>
    )
}

export default Header