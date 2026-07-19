import type { ReactNode } from 'react';

const u = 'prnvswrp';
const d = 'gmail.com';

export function getEmail() {
    return `${u}@${d}`;
}

type Props = {
    className?: string;
    children?: ReactNode;
};

export function EmailLink({ className, children }: Props) {
    const email = getEmail();
    return (
        <a href={`mailto:${email}`} className={className}>
            {children ?? email}
        </a>
    );
}
