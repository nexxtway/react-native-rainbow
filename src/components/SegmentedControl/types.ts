import { ReactNode } from 'react';

export type OptionProps = {
    label?: ReactNode;
    value?: string;
    icon?: ReactNode;
};

export type Size = 'medium' | 'small';
