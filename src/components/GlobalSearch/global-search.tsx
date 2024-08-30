"use client"

import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '../ui'
import useDebounce from '@/hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { setList, findCharacterByName } from '@/store/slices/searchSlice'

const GlobalSearch: React.FC<AllPeopleI> = ({ allPeople }) => {
    const [target, setTarget] = useState<string>('')
    const debouncedSearchQuery = useDebounce(target, 300)
    const dispatch = useDispatch()

    const { people } = allPeople

    useEffect(() => {
        dispatch(setList(people))
    }, [people])


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target
        setTarget(value)
    }

    const findCharacter = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(findCharacterByName(debouncedSearchQuery))
    }

    return (
        <form className="max-w-md">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-4 h-4" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 "
                    placeholder="Search character..."
                    required
                    value={target}
                    onChange={(e) => handleInput(e)}
                />
                <Button className="absolute" type="submit" onClick={(e) => findCharacter(e)}>Search</Button>
            </div>
        </form>
    )
}

export default GlobalSearch