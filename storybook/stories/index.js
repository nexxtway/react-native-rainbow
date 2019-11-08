import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Button from '../../src/components/Button';

const styles = {
    marginBottom: 16,
};

storiesOf('Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => (
        <>
            <Button
                style={styles}
                label="Hello Button"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <Button label="Brand button" variant="brand" />
        </>
    ));
