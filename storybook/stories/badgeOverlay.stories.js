import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Bell from '../../src/components/Icons/bell';
import { BadgeOverlay } from '../../src/components';
import RowView from './RowView';

const iconStyles = {
    color: '#a4a7b5',
    width: '30px',
    height: '30px',
};

storiesOf('BadgeOverlay', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('Basic', () => {
        return (
            <>
                <RowView spaceTop={0}>
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
                </RowView>
            </>
        );
    });
