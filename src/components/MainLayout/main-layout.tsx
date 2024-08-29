import React, { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <main className='flex-1 w-full px-5 py-10 space-y-12 m-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl'>
            {children}
        </main>
    )
}

export default MainLayout