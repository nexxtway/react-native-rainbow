import React from 'react';
import { FlatList } from '..';
import Header from './header';
import { ScreenFlatListProps } from './types';

const ScreenFlatList = ({
    title,
    itemComponent,
    headerComponent: HeaderComponent,
    subHeaderComponent,
    dataSource,
}: ScreenFlatListProps) => {
    const header = HeaderComponent ? <HeaderComponent title={title} /> : <Header title={title} />;

    return (
        <>
            {header}
            <FlatList
                itemComponent={itemComponent}
                headerComponent={subHeaderComponent}
                dataSource={dataSource}
            />
        </>
    );
};

export default ScreenFlatList;
