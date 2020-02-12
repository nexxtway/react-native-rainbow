import { ReactNode } from 'react';

export type AvatarSizes = 'large' | 'medium' | 'small' | 'x-small';

export type Avatar = {
    src?: string;
    initials?: string;
    icon?: ReactNode;
};
