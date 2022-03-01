import React from 'react';
import { FlatList } from '..';
import Header from './header';
import { ScreenFlatListProps } from './types';

const ScreenFlatList = ({
    title,
    itemComponent,
    headerComponent: HeaderComponent,
    subHeaderComponent: SubHeaderComponent,
    dataSource,
}: ScreenFlatListProps) => {
    const header = HeaderComponent ? <HeaderComponent title={title} /> : <Header title={title} />;
    const subHeader = SubHeaderComponent ? <SubHeaderComponent title={title} /> : null;

    return (
        <>
            {header}
            {subHeader}
            <FlatList itemComponent={itemComponent} dataSource={dataSource} />
        </>
    );
};

export default ScreenFlatList;
