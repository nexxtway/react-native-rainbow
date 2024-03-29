import { ComponentType } from 'react';
import { ListRenderItem } from 'react-native';

export interface Data<ItemT = any> {
    items: ItemT[];
    [key: string]: any;
}

export type DataSourceParams<ItemT> = { previousResponse?: Data<ItemT>; items: ItemT[] };

export type DataSource<ItemT> = (params: DataSourceParams<ItemT>) => Promise<Data<ItemT>>;

export type HeaderComponentProps<ItemT> = {
    data?: Data<ItemT>;
};

export interface FlatListProps<ItemT = any> {
    itemComponent: ListRenderItem<ItemT>;
    headerComponent?: ComponentType<HeaderComponentProps<ItemT>>;
    dataSource: DataSource<ItemT>;
}
