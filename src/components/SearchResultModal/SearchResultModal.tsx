'use client'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '@/hooks/redux'
import { selectSearchResults } from '@/store/slices/searchSlice'

const SearchResultModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false)
    const searchResults = useAppSelector((state) => selectSearchResults(state))

    useEffect(() => {
        if (searchResults.length > 0) { // Show modal if there are results
            setShowModal(true)
        } else {
            setShowModal(false) // Hide modal if there are no results
        }
    }, [searchResults])

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
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
                        >
                            ×
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                        {searchResults.length > 0 ? (
                            <ul className="list-disc pl-5">
                                {searchResults.map((character) => (
                                    <li key={character.name} className="py-2">{character.name}</li>
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
