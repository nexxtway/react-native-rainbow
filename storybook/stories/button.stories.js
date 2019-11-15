import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Button from '../../src/components/Button';

const styles = {
    marginBottom: 16,
};

storiesOf('Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <Button
                style={styles}
                label="Button Base"
                variant="base"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <Button style={styles} label="Button Neutral" variant="neutral" />
            <Button
                style={styles}
                label="Button Outline Brand"
                variant="outline-brand"
            />
            <Button style={styles} label="Button Brand" variant="brand" />
            <Button style={styles} label="Button Success" variant="success" />
            <Button
                style={styles}
                label="Button Destructive"
                variant="destructive"
            />
        </>
    ))
    .add('disabled', () => (
        <>
            <Button
                disabled
                style={styles}
                label="Button Base"
                variant="base"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <Button
                disabled
                style={styles}
                label="Button Neutral"
                variant="neutral"
            />
            <Button
                disabled
                style={styles}
                label="Button Outline Brand"
                variant="outline-brand"
            />
            <Button
                disabled
                style={styles}
                label="Button Brand"
                variant="brand"
            />
            <Button
                disabled
                style={styles}
                label="Button Success"
                variant="success"
            />
            <Button
                disabled
                style={styles}
                label="Button Destructive"
                variant="destructive"
            />
        </>
    ))
    .add('isLoading', () => (
        <>
            <Button
                isLoading
                style={styles}
                label="Button Base"
                variant="base"
                // eslint-disable-next-line no-alert
                onPress={() => alert('button clicked')}
            />
            <Button
                isLoading
                style={styles}
                label="Button Neutral"
                variant="neutral"
            />
            <Button
                isLoading
                style={styles}
                label="Button Outline Brand"
                variant="outline-brand"
            />
            <Button
                isLoading
                style={styles}
                label="Button Brand"
                variant="brand"
            />
            <Button
                isLoading
                style={styles}
                label="Button Success"
                variant="success"
            />
            <Button
                isLoading
                style={styles}
                label="Button Destructive"
                variant="destructive"
            />
        </>
    ));
