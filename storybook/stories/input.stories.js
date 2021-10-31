import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import ThemeWrapper from './ThemeWrapper';
import CenterView from './CenterView';
import Input from '../../src/components/Input';
import User from '../../src/components/Icons/user';
import Heart from '../../src/components/Icons/heart';
import { COLOR_GRAY_2 } from '../../src/styles/colors';

const keyboardAvoindingViewStyles = {
    flex: 1,
};

const styles = {
    marginBottom: 24,
};

const iconStyles = {
    color: COLOR_GRAY_2,
    width: '100%',
    height: '100%',
};

const Examples = () => {
    const ref = useRef();
    return (
        <>
            <Input
                style={styles}
                icon={<User style={iconStyles} />}
                returnKeyType="next"
                onSubmitEditing={() => ref.current.focus()}
            />
            <Input style={styles} label="Label" placeholder="Type here" ref={ref} />
            <Input style={styles} label="Disabled Input" disabled />
            <Input
                icon={<Heart style={iconStyles} />}
                iconPosition="right"
                style={styles}
                label="Label"
                error="This is a required field"
            />
        </>
    );
};

storiesOf('Input', module)
    .addDecorator(getStory => (
        <KeyboardAvoidingView
            style={keyboardAvoindingViewStyles}
            behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
        >
            <ThemeWrapper>
                <CenterView>{getStory()}</CenterView>
            </ThemeWrapper>
        </KeyboardAvoidingView>
    ))
    .add('basic', () => <Examples />)
    .add('using type', () => (
        <>
            <Input type="username" label="User Name" placeholder="Enter your name" style={styles} />
            <Input type="email" label="Email" placeholder="Enter your email" style={styles} />
            <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                style={styles}
            />
            <Input
                type="password"
                label="New Password"
                placeholder="Enter your new password"
                textContentType="newPassword"
                autoComplete="password-new"
                passwordRules="minlength: 6; maxlength: 10; required: lower; required: upper; required: digit;"
                style={styles}
            />
        </>
    ));
