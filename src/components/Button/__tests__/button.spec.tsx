import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../';

jest.mock('react-native-spinkit', () => 'Spinner');

describe('<Button />', () => {
    it('should render the label passed', () => {
        const testRenderer = TestRenderer.create(<Button label="Button Label" />);
        const testInstance = testRenderer.root;
        expect(testInstance.findByType('Text').children).toEqual(['Button Label']);
    });
});
