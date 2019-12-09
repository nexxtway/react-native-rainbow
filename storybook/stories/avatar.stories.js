import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Avatar from '../../src/components/Avatar';
import ArrowRight from '../../src/components/Icons/arrowRight';

const photo = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const styles = {
    marginBottom: 16,
};

const iconStyles = {
    color: 'white',
};

storiesOf('Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Sizes', () => (
        <>
            <Avatar size="large" src={photo} />
            <Avatar initial="AS" src={photo} />
            <Avatar size="small" src={photo} />
            <Avatar size="x-small" src={photo} />
        </>
    ))
    .add('Width icon', () => (
        <Avatar icon={<ArrowRight style={iconStyles} />} />
    ))
    .add('With initials', () => <Avatar initial="AB" />);
