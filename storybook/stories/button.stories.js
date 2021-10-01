import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Button from '../../src/components/Button';
import ArrowRight from '../../src/components/Icons/arrowRight';
import ArrowLeft from '../../src/components/Icons/arrowLeft';

const styles = {
    marginBottom: 16,
};

const iconStyles = {
    color: 'white',
    width: 20,
    height: 20,
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
            <Button style={styles} label="Button Outline Brand" variant="outline-brand" />
            <Button style={styles} label="Button Brand" variant="brand" />
            <Button
                style={styles}
                label="Button Destructive"
                variant="destructive"
                icon={<ArrowLeft style={iconStyles} />}
                iconPosition="left"
            />
            <Button
                style={styles}
                label="Button with RightIcon"
                variant="success"
                icon={<ArrowRight style={iconStyles} />}
                iconPosition="right"
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
            <Button disabled style={styles} label="Button Neutral" variant="neutral" />
            <Button disabled style={styles} label="Button Outline Brand" variant="outline-brand" />
            <Button disabled style={styles} label="Button Brand" variant="brand" />
            <Button disabled style={styles} label="Button Success" variant="success" />
            <Button disabled style={styles} label="Button Destructive" variant="destructive" />
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
            <Button isLoading style={styles} label="Button Neutral" variant="neutral" />
            <Button isLoading style={styles} label="Button Outline Brand" variant="outline-brand" />
            <Button isLoading style={styles} label="Button Brand" variant="brand" />
            <Button isLoading style={styles} label="Button Success" variant="success" />
            <Button isLoading style={styles} label="Button Destructive" variant="destructive" />
        </>
    ));
