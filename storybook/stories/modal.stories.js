import React, { createElement, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';

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
                    />
                </>
            );
        }),
    );
