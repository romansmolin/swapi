import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
    return (
        <header>
            <div className="mx-auto shadow-md flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
            
                    <span className="sr-only">Home</span>
                    <Link href="/" className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-indigo-900 bg-clip-text text-transparent">
                        SWAPI
                    </Link>
           
            </div>
        </header>
    )
}

export default Header