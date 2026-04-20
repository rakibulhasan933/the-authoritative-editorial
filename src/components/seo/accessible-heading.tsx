import React from 'react';
import { cn } from '@/lib/utils';

interface AccessibleHeadingProps {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
    id?: string;
    visualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Accessible heading component that maintains proper semantic heading hierarchy
 * while allowing visual styling flexibility
 *
 * Usage:
 * <AccessibleHeading level="h1">Main Page Title</AccessibleHeading>
 * <AccessibleHeading level="h2">Section Title</AccessibleHeading>
 * <AccessibleHeading level="h3" visualLevel="h2">Visually large but semantically h3</AccessibleHeading>
 */
export const AccessibleHeading: React.FC<AccessibleHeadingProps> = ({
    level,
    children,
    className,
    id,
    visualLevel,
}) => {
    const HeadingTag = level;
    const visualHeadingTag = visualLevel || level;

    const baseClasses = {
        h1: 'text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight',
        h2: 'text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight',
        h3: 'text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug',
        h4: 'text-xl md:text-2xl lg:text-3xl font-serif font-semibold leading-snug',
        h5: 'text-lg md:text-xl lg:text-2xl font-serif font-semibold',
        h6: 'text-base md:text-lg lg:text-xl font-serif font-semibold',
    };

    const visualClasses = baseClasses[visualHeadingTag];

    return (
        <HeadingTag
            className={cn(
                'text-foreground transition-colors duration-300',
                visualClasses,
                className
            )}
            id={id}
        >
            {children}
        </HeadingTag>
    );
};

/**
 * Helper component for screen-reader-only content
 */
export const ScreenReaderOnly: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <span className="sr-only">{children}</span>
);

/**
 * Helper for visually hidden but semantically present text
 */
export const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <span
        className="absolute w-px h-px p-0 m-(-1px) overflow-hidden clip-rect(0, 0, 0, 0) border-0"
        aria-hidden="false"
    >
        {children}
    </span>
);