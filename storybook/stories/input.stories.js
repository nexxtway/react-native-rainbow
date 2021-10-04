import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../../src/components/Input';
import User from '../../src/components/Icons/user';
import Heart from '../../src/components/Icons/heart';
import { COLOR_GRAY_2 } from '../../src/styles/colors';

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
                blurOnSubmit={false}
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
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () => <Examples />);
