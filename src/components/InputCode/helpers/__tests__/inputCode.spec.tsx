import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import InputCode from '../../';
import handlePasteCode from '../getCodeFromClipboard';

describe('<InputCode/>', () => {
    const numberOfDigits = 6;
    it('should create an input Code by the number of digits provided', () => {
        const testRenderer = TestRenderer.create(<InputCode digits={numberOfDigits} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType('TextInput').length).toEqual(numberOfDigits);
    });

    const match = '131016';

    it('should recognize code in a string', () => {
        const text = 'your awesome code is 131016';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText).toBe(match);
    });

    it('should recognize code in a string with spaces', () => {
        const text = 'your awesome code is 13 10 16';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText).toBe(match);
    });

    it('should recognize code in a string with special characters', () => {
        const text = 'your awesome code is 13-10-16';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText).toBe(match);
    });

    it('I should recognize the code regardless of the location in the string.', () => {
        const text =
            'Your code starts with 13 in the middle has 10 and in the end 16. thanks for using our service.';
        const sanitizeText = handlePasteCode(numberOfDigits, text);
        expect(sanitizeText).toBe(match);
    });
});
