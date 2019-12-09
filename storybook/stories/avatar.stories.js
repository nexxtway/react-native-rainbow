import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Avatar from '../../src/components/Avatar';
import ArrowRight from '../../src/components/Icons/arrowRight';

const photo = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const iconStyles = {
    color: 'white',
    width: '100%',
    height: '100%',
};

const viewStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const viewSingleStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

storiesOf('Avatar', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Image', () => (
        <View style={viewStyle}>
            <Avatar size="large" src={photo} />
            <Avatar src={photo} />
            <Avatar size="small" src={photo} />
            <Avatar size="x-small" src={photo} />
        </View>
    ))
    .add('Icon', () => (
        <View style={viewStyle}>
            <Avatar size="large" icon={<ArrowRight style={iconStyles} />} />
            <Avatar icon={<ArrowRight style={iconStyles} />} />
            <Avatar size="small" icon={<ArrowRight style={iconStyles} />} />
            <Avatar size="x-small" icon={<ArrowRight style={iconStyles} />} />
        </View>
    ))
    .add('Initials', () => (
        <View style={viewStyle}>
            <Avatar size="large" initial="AB" />
            <Avatar initial="AB" />
            <Avatar size="small" initial="AB" />
            <Avatar size="x-small" initial="AB" />
        </View>
    ));
