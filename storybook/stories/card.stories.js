import React from 'react';
import { View, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Card from '../../src/components/Card';
import Button from '../../src/components/Button';

const styles = {
    marginBottom: 16,
};
const textStyles = {
    textAlign: 'center',
    padding: 16,
};

storiesOf('Card', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => (
        <>
            <Card
                style={styles}
                // add icon here
                title="Contact Details"
                actions={<Button label="New" variant="outline-brand" />}
            />
            <Card style={styles} title="Contacts" isLoading />
            <Card
                style={styles}
                title="Task"
                actions={<Button variant="brand" label="Add" />}
                footer={
                    <View>
                        <Button label="Clear All" variant="destructive" />
                    </View>
                }
            >
                <Text style={textStyles}>No new tasks</Text>
            </Card>
        </>
    ));
