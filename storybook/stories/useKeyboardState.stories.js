import React from 'react';
import { Text, SafeAreaView, Keyboard } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../../src/components/Input';
import Button from '../../src/components/Button';
import RenderIf from '../../src/components/RenderIf';
import useKeyboardState from './../../src/hooks/useKeyboardState';

const BasicUse = function () {
    const keyboardState = useKeyboardState();
    return (
        <SafeAreaView>
            <Text>Is Keyboard open? {JSON.stringify(keyboardState.isOpen)}</Text>
            <Input />
            <RenderIf isTrue={keyboardState.isOpen}>
                <Button label="Dismiss Keyboard" onPress={() => Keyboard.dismiss()} />
            </RenderIf>
        </SafeAreaView>
    );
};

storiesOf('useKeyboardState', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <BasicUse />
        </>
    ));
