import { cn } from '@/lib/cn'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { UrlObject } from 'url'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: ReactNode | string
    isLink?: boolean
    href?: UrlObject
    outline?: boolean
}

const Button: React.FC<ButtonProps> = ({ className, children, isLink, outline, href, ...rest }) => {
    const buttonClass = 'text-white end-2.5 bottom-2.5 bg-primary-700 hover:bg-primary-800 active:outline-none font-medium rounded-lg text-sm px-4 py-2'
    const outlineButtonClass = 'text-primary-700 border border-primary-700 end-2.5 bottom-2.5 bg-transparent hover:bg-primary-700 hover:text-white active:outline-none font-medium rounded-lg text-sm px-4 py-2'

    const componentClassName = cn(
        outline ? outlineButtonClass : buttonClass, 
        className 
    );

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
            className={componentClassName}
        >
            {children}
        </button>
    )
}

export default Button