import { ReactNode } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native';
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
    onError?: (error: NativeSyntheticEvent<ImageErrorEventData>) => void;
}
