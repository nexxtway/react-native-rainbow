import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import { Spinner } from '../../src/components';
import ColView from './ColView';
import { Text } from 'react-native';

const styleText = {
    color: '#a4a7b5',
    margin: 10,
    fontSize: 16,
};

const customColor = {
    color: 'purple',
};

storiesOf('Spinner', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <ColView>
                <ColView spaceTop={40}>
                    <Spinner size="large" />
                    <Text style={styleText}>Large</Text>
                </ColView>
                <ColView spaceTop={40}>
                    <Spinner size="medium" />
                    <Text style={styleText}>Medium</Text>
                </ColView>
                <ColView spaceTop={40}>
                    <Spinner size="small" />
                    <Text style={styleText}>Small</Text>
                </ColView>
                <ColView spaceTop={40}>
                    <Spinner size="x-small" />
                    <Text style={styleText}>X-Small</Text>
                </ColView>
                <ColView spaceTop={40}>
                    <Spinner size="xx-small" />
                    <Text style={styleText}>XX-Small</Text>
                </ColView>
            </ColView>
        );
    })
    .add('Variants', () => {
        return (
            <ColView>
                <ColView spaceTop={40}>
                    <Spinner size="large" />
                    <Text style={styleText}>Brand</Text>
                </ColView>
                <ColView spaceTop={40}>
                    <Spinner size="large" variant="neutral" />
                    <Text style={styleText}>Neutral </Text>
                </ColView>
            </ColView>
        );
    })
    .add('Custom color', () => (
        <ColView>
            <Spinner size="large" style={customColor} />
        </ColView>
    ));
