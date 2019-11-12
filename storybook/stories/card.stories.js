import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Card from '../../src/components/Card';

storiesOf('Card', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => (
        <>
            <Card title="Foo" />
        </>
    ));
