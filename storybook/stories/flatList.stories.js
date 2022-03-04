import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { FlatList } from '../../src/components';

const StyledItemView = styled.View`
    padding: 16px;
    justify-content: center;
    align-items: flex-start;
`;

const Item = ({ item }) => {
    return (
        <StyledItemView>
            <Text>{item}</Text>
        </StyledItemView>
    );
};

const perPage = 20;
const dataSource = ({ previousResponse, items }) => {
    return new Promise((resolve, reject) => {
        const startIndex = !previousResponse ? 1 : previousResponse.startIndex;
        const newItems = Array.from(Array(perPage).keys()).map(i => `Item ${i + startIndex}`);
        setTimeout(() => {
            resolve({
                items: newItems,
                startIndex: startIndex + perPage,
            });
        }, 3000);
    });
};

storiesOf('FlatList', module).add('Basic', () => (
    <FlatList itemComponent={Item} dataSource={dataSource} />
));
