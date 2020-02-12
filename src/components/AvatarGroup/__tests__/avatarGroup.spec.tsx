import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Avatars from '../Avatars';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const avatars = Array.from({ length: 5 }).fill({
    src: PHOTO,
});

describe('<Avatars />', () => {
    it('should render all avatar groups', () => {
        const testRenderer = TestRenderer.create(<Avatars avatars={avatars} />);
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType('View').length).toEqual(5);
    });
    it('should render avatar groups with limits', () => {
        const limit = 3;
        const testRenderer = TestRenderer.create(
            <Avatars avatars={avatars} maxAvatars={limit} />,
        );
        const testInstance = testRenderer.root;
        expect(testInstance.findAllByType('View').length).toEqual(limit);
    });
});
