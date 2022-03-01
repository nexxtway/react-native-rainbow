import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { ScreenFlatList } from '../../src/components';

const StyledItemView = styled.View`
    padding: 16px;
    justify-content: center;
    align-items: flex-start;
`;

const StyledSubheaderView = styled.View`
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: #ccc;
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

const SubHeader = () => (
    <StyledSubheaderView>
        <Text>Scroll down to load more items.</Text>
    </StyledSubheaderView>
);

storiesOf('ScreenFlatList', module).add('Basic', () => (
    <NavigationContainer>
        <ScreenFlatList
            itemComponent={Item}
            dataSource={dataSource}
            title="ScreenFlatList"
            subHeaderComponent={SubHeader}
        />
    </NavigationContainer>
));
