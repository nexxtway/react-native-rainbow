import { ComponentType, ReactNode } from 'react';
import { ListRenderItem } from 'react-native';
import { DataSource } from '../FlatList/types';

export interface HeaderProps {
    title: ReactNode;
}

export interface ScreenFlatListProps<ItemT = any> {
    title?: ReactNode;
    itemComponent: ListRenderItem<ItemT>;
    /** A component that overrides the default page header. Receives `title` as prop */
    headerComponent?: ComponentType<HeaderProps>;
    subHeaderComponent?: ComponentType<HeaderProps>;
    dataSource: DataSource<ItemT>;
}
