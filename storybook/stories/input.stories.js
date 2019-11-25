import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../../src/components/Input';

const styles = {
    marginBottom: 16,
};

storiesOf('Input', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <Input label="Label" />
        </>
    ));
