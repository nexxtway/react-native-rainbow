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

const dataSource = ({ previousResponse, items }) => {
    return new Promise((resolve, reject) => {
        const startIndex = !previousResponse ? 1 : previousResponse.startIndex;
        const newItems = Array.from(Array(10).keys()).map(i => `Item ${i + startIndex}`);
        setTimeout(() => {
            resolve({
                items: newItems,
                startIndex: startIndex + 10,
            });
        }, 3000);
    });
};

storiesOf('FlatList', module).add('Basic', () => (
    <FlatList itemComponent={Item} dataSource={dataSource} />
));
