import { ListRenderItem } from 'react-native';

export interface Data<ItemT = any> {
    items: ItemT[];
    [key: string]: any;
}

export type DataSourceParams<ItemT> = { previousResponse?: Data<ItemT>; items: ItemT[] };

export interface FlatListProps<ItemT = any> {
    itemComponent: ListRenderItem<ItemT>;
    dataSource: (params: DataSourceParams<ItemT>) => Promise<Data<ItemT>>;
}
