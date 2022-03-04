import React, { useEffect, useRef, useState } from 'react';
import { FlatList as RnFlatList } from 'react-native';
import Footer from './footer';
import { Data, FlatListProps } from './types';

const FlatList = <ItemT extends object>({
    itemComponent,
    headerComponent: HeaderComponent,
    dataSource,
}: FlatListProps<ItemT>) => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [items, setItems] = useState<ItemT[]>([]);

    const previousResponse = useRef<Data<ItemT> | undefined>(undefined);

    const loadMore = async () => {
        setIsLoadingMore(true);
        try {
            const response = await dataSource({
                previousResponse: previousResponse.current,
                items,
            });
            previousResponse.current = response;
            setItems([...items, ...response.items]);
        } catch (e) {
            console.log(e);
        }
        setIsLoadingMore(false);
    };

    const refresh = async () => {
        setIsRefreshing(true);
        try {
            const response = await dataSource({
                previousResponse: undefined,
                items: [],
            });
            previousResponse.current = response;
            setItems([...response.items]);
        } catch (e) {
            console.log(e);
        }
        setIsRefreshing(false);
    };

    useEffect(() => {
        loadMore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const header = HeaderComponent ? <HeaderComponent data={previousResponse.current} /> : null;

    return (
        <>
            {header}
            <RnFlatList
                renderItem={itemComponent}
                data={items}
                onEndReached={() => {
                    console.log('end');
                    loadMore();
                }}
                ListFooterComponent={<Footer showIf={isLoadingMore} />}
                onRefresh={refresh}
                refreshing={isRefreshing}
            />
        </>
    );
};

export default FlatList;
