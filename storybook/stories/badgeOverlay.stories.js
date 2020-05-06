import React, { createElement } from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Bell from '../../src/components/Icons/bell';
import { BadgeOverlay, Avatar, Modal, Button } from '../../src/components';
import ColView from './ColView';
import RowView from './RowView';
import { TouchableOpacity, Text } from 'react-native';

const PHOTO = 'https://source.unsplash.com/mEZ3PoFGs_k/50x50';

const iconStyles = {
    color: '#a4a7b5',
    width: '30px',
    height: '30px',
};

const styles = {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
};

const titleStyle = {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
};

const stylesButton = {
    marginTop: 10,
};

storiesOf('BadgeOverlay', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <RowView>
                    <BadgeOverlay
                        overlap="circle"
                        position="top-left"
                        value="1"
                    >
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay overlap="circle" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay
                        overlap="circle"
                        position="bottom-left"
                        value="1"
                    >
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay
                        overlap="circle"
                        position="bottom-right"
                        value="1"
                    >
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                </RowView>
                <RowView spaceTop={50}>
                    <BadgeOverlay value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="99">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="100">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="1k">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                </RowView>
                <RowView spaceTop={50}>
                    <BadgeOverlay variant="brand" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay variant="success" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay variant="warning" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                </RowView>
                <RowView spaceTop={50}>
                    <BadgeOverlay position="top-left" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay position="bottom-left" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay position="bottom-right" value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                </RowView>
                <RowView spaceTop={50}>
                    <BadgeOverlay value={1}>
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay value="1">
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                </RowView>
                <RowView spaceTop={50}>
                    <BadgeOverlay>
                        <Bell style={iconStyles} />
                    </BadgeOverlay>
                    <BadgeOverlay isHidden={true}>
                        <Bell style={iconStyles} />
                    </BadgeOverlay>

                    <BadgeOverlay overlap="circle">
                        <Avatar size="large" src={PHOTO} />
                    </BadgeOverlay>
                </RowView>
            </>
        );
    })
    .add('Basic With Modal', () =>
        createElement(() => {
            const [isOpen, setIsOpen] = React.useState(false);
            const [isHidden, setIsHidden] = React.useState(false);
            return (
                <ColView spaceTop={50}>
                    {!isHidden && (
                        <Text style={titleStyle}>Tap the avatar.</Text>
                    )}
                    <TouchableOpacity
                        onPress={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <BadgeOverlay
                            isHidden={isHidden}
                            value={3}
                            overlap="circle"
                        >
                            <Avatar size="large" src={PHOTO} />
                        </BadgeOverlay>
                    </TouchableOpacity>

                    <Modal
                        isOpen={isOpen}
                        title="Modal Title"
                        onRequestClose={() => {
                            setIsOpen(false);
                            setIsHidden(true);
                        }}
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
                    {isHidden && (
                        <Button
                            style={stylesButton}
                            label="Set Notifications"
                            variant="outline-brand"
                            onPress={() => setIsHidden(false)}
                        />
                    )}
                </ColView>
            );
        }),
    );
