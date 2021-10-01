import React from 'react';
import { View, Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Card from '../../src/components/Card';
import ButtonIcon from '../../src/components/ButtonIcon';
import Heart from '../../src/components/Icons/heart';
import Share from '../../src/components/Icons/share';

const styles = {
    marginBottom: 16,
};

const iconStyles = {
    color: 'red',
    width: 20,
    height: 20,
};

const iconGrayStyles = {
    color: 'gray',
    width: 20,
    height: 20,
};

const imageStyles = {
    width: '100%',
    height: 200,
};

const footerStyles = {
    flexDirection: 'row',
};

storiesOf('Card', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => (
        <>
            <Card
                style={styles}
                // add icon here
                title="Favorite"
                actions={<ButtonIcon icon={<Heart style={iconStyles} />} size="xx-small" />}
            />
            <Card style={styles} title="Contacts" isLoading />
            <Card
                style={styles}
                footer={
                    <View style={footerStyles}>
                        <ButtonIcon icon={<Heart style={iconGrayStyles} />} size="x-small" />
                        <ButtonIcon icon={<Share style={iconGrayStyles} />} size="x-small" />
                    </View>
                }
            >
                <View>
                    <Image
                        style={imageStyles}
                        source={require('../assets/images/colorfull-paper.jpg')}
                    />
                </View>
            </Card>
        </>
    ));
