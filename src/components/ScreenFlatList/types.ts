import { ComponentType, ReactNode } from 'react';
import { ListRenderItem } from 'react-native';
import { DataSource, HeaderComponentProps } from '../FlatList/types';

export interface HeaderProps {
    title: ReactNode;
}

export interface ScreenFlatListProps<ItemT = any> {
    title?: ReactNode;
    itemComponent: ListRenderItem<ItemT>;
    /** A component that overrides the default page header. Receives `title` as prop */
    headerComponent?: ComponentType<HeaderProps>;
    subHeaderComponent?: ComponentType<HeaderComponentProps<ItemT>>;
    dataSource: DataSource<ItemT>;
}
