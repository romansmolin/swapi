import { cn } from '@/lib/cn'
import React, { ReactNode } from 'react'

interface ButtonProps {
    className?: string,
    children: ReactNode | string
    onClick?: () => void
    type?: "button" | "reset" | "submit" | undefined
}

const Button: React.FC<ButtonProps> = ({ className = "", children, onClick, type = 'button' }) => {
    return (
        <button
            type={type}
            className={cn('text-white end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 active:outline-none font-medium rounded-lg text-sm px-4 py-2', className)}
            onClick={onClick && onClick}
        >
            {children}
        </button>
    )
}

export default Button