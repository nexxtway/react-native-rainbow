import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../index';

describe('<Button />', () => {
    it('should fire an event when press the button', () => {
        const pressMockFn = jest.fn();
        const component = TestRenderer.create(
            <Button label="Button Label" onPress={pressMockFn} />,
        );
        const componentInstance = component.root;
        componentInstance.props.onPress();
        expect(pressMockFn).toHaveBeenCalledTimes(1);
    });
});
