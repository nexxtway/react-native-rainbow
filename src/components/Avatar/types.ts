import { ReactNode } from 'react';
import { BaseProps } from '../types';

type AvatarSizes = 'large' | 'medium' | 'small' | 'x-small';

export type RefType = {
    refresh: () => void;
};

export interface Props extends BaseProps {
    src?: string;
    initials?: string;
    icon?: ReactNode;
    size?: AvatarSizes;
    onError?: () => void;
}
