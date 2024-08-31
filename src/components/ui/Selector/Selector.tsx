"use client"
import { cn } from '@/lib/cn';
import React, { useState } from 'react';
import Button from '../Button/Button';

type Option = {
    label: string;
    option: JSX.Element;
};

interface SelectorProps {
    options: Option[];
    label: string;
    className?: string;
}

const CustomSelector: React.FC<SelectorProps> = ({ options, label, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (label: string) => {
        setSelectedLabel(label);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative", className)}>
            <label className="block text-sm font-medium sr-only">{label}</label>
            <Button onClick={toggleDropdown} type='button' outline>
                {label}
            </Button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-lg bg-white shadow-lg border border-gray-300">
                    <ul className="py-1">
                        {options.map((optionItem, index) => (
                            <li
                                aria-label={optionItem.label}
                                key={index}
                                onClick={() => handleSelect(optionItem.label)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {optionItem.option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomSelector;
