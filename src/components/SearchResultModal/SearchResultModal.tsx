'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/redux'
import { selectSearchResults } from '@/store/slices/searchSlice'
import { Button } from '../ui'
import { usePathname } from 'next/navigation'

const SearchResultModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const searchResults = useAppSelector((state) => selectSearchResults(state))
    const pathname = usePathname()

    useEffect(() => {
        if (searchResults.length > 0) { 
            setShowModal(true)
        } else {
            setShowModal(false) 
        }
    }, [searchResults])

    useEffect(() => {
        setShowModal(false) 
    }, [pathname])

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 text-primary-600 hover:text-primary-900 text-2xl"
                        >
                            ×
                        </button>
                        <h2 className="text-2xl text-primary-600 font-bold mb-4">Search Results</h2>
                        {searchResults.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {searchResults.map((character) => (
                                    // <li key={character.name} className="py-2">{character.name}</li>
                                    <div key={character.name} className="py-2 flex justify-between items-center">
                                        <span>{character.name}</span>
                                        <Button 
                                            isLink
                                            href={{
                                                pathname: '/character-details',
                                                query: { id: character.id },
                                            }}
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No results found.</p>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default SearchResultModal
