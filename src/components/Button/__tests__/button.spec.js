import 'react-native';
import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
    it('should fire an event when press the button', () => {
        const pressMockFn = jest.fn();
        const component = mount(
            <Button label="Button Label" onPress={pressMockFn} />,
        );
        component.simulate('click');
        expect(pressMockFn).toHaveBeenCalledTimes(1);
    });
});
