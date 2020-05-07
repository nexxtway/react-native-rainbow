import { ReactNode } from 'react';

export type AvatarSizes = 'large' | 'medium' | 'small' | 'x-small';

export type AvatarProps = {
    src?: string;
    initials?: string;
    icon?: ReactNode;
};
