import React from 'react'
import { Search } from 'lucide-react'
import { Button } from '../ui'

const GlobalSearch: React.FC = () => {
    return (
        <form className="max-w-md">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-4 h-4"/>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search character..." required />
                <Button className="absolute" type="submit">Search</Button>
            </div>
        </form>
    )
}

export default GlobalSearch