import { cn } from '@/lib/utils';

interface TagProps {
    label: string;
    className?: string;
    color?: 'sage' | 'peach' | 'lavender' | 'sky' | 'default';
    rotation?: string; // e.g. "rotate-3"
}

export function Tag({ label, className, color = 'default', rotation }: TagProps) {
    const colors = {
        default: 'bg-gray-100 text-gray-800',
        sage: 'bg-accent-sage/60 text-gray-800 border-accent-sage',
        peach: 'bg-accent-peach/60 text-gray-800 border-accent-peach',
        lavender: 'bg-accent-lavender/60 text-gray-800 border-accent-lavender',
        sky: 'bg-accent-sky/60 text-gray-800 border-accent-sky',
    };

    return (
        <div
            className={cn(
                'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium shadow-sm border border-transparent/10 backdrop-blur-sm',
                colors[color],
                rotation,
                className
            )}
        >
            {label}
        </div>
    );
}
