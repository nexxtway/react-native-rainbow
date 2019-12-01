import React, { createElement, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import { Text } from 'react-native';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';

const styles = {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
};

storiesOf('Modal', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('basic', () =>
        createElement(() => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <>
                    <Button
                        label="Open Modal"
                        variant="brand"
                        onPress={() => setIsOpen(true)}
                    />
                    <Modal
                        isOpen={isOpen}
                        title="Modal Title"
                        onRequestClose={() => setIsOpen(false)}
                    >
                        <Text style={styles}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                    </Modal>
                </>
            );
        }),
    );
