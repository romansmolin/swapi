import { cn } from '@/lib/cn'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { UrlObject } from 'url'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode | string
    // onClick?: () => void
    isLink?: boolean
    href?: UrlObject
    // type?: 'submit' | 'reset' | 'button' | undefined
}

const Button: React.FC<ButtonProps> = ({ className, children, isLink, href, ...rest }) => {
    const buttonClass = 'text-white end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 active:outline-none font-medium rounded-lg text-sm px-4 py-2'

    if (href && isLink) {
        return (
            <Link href={href} className={cn('inline-block', buttonClass, className)}>
                {children}
            </Link>
        )
    }

    return (
        <button
            {...rest}
            className={cn(buttonClass, className)}
        >
            {children}
        </button>
    )
}

export default Button