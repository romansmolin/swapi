import React, { ReactNode } from 'react'

interface GridProps {
    className?: string,
    children: ReactNode
}

const Grid: React.FC<GridProps> = ({ children, className = "" }) => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">{children}</div>
    )
}

export default Grid