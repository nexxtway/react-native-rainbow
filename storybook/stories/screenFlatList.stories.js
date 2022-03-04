import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { RenderIf, ScreenFlatList } from '../../src/components';
import attachThemeAttrs from '../../src/styles/helpers/attachThemeAttrs';

const StyledItemView = styled.View`
    padding: 16px;
    justify-content: center;
    align-items: flex-start;
`;

const StyledSubheaderView = attachThemeAttrs(styled.View)`
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${props => props.palette.background.highlight};
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

const SubHeader = ({ data }) => {
    if (data) {
        return (
            <StyledSubheaderView>
                <RenderIf isTrue={data}>
                    <Text>Loaded {data.startIndex - 1} items.</Text>
                </RenderIf>
            </StyledSubheaderView>
        );
    }
    return null;
};

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
