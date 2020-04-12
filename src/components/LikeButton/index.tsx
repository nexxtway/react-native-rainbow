import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BaseProps } from '../types';
import {
    IconContainer,
    LikeButtonContainer,
    LableContainer,
    StatesContainer,
    ButtonIconContainer,
} from './styled';
import Angry from '../Icons/angry';
import Haha from '../Icons/haha';
import Like from '../Icons/like';
import LikeFilled from '../Icons/likeFilled';
import Love from '../Icons/love';
import Sad from '../Icons/sad';
import Wow from '../Icons/wow';
import RenderIf from '../RenderIf/index';
import { Modal } from 'react-native';

interface Props extends BaseProps {
    value?: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';
    labelEnabled?: boolean;
    onChange?: (state: any) => void;
}

const iconStyles = {
    width: '35',
    height: '35',
};

const modalIconStyle = {
    width: '40',
    height: '40',
};

const stateMap = {
    like: {
        icon: <LikeFilled style={iconStyles} />,
        label: 'Like',
    },
    love: {
        icon: <Love style={iconStyles} />,
        label: 'Love',
    },
    haha: {
        icon: <Haha style={iconStyles} />,
        label: 'Haha',
    },
    wow: {
        icon: <Wow style={iconStyles} />,
        label: 'Wow',
    },
    sad: {
        icon: <Sad style={iconStyles} />,
        label: 'Sad',
    },
    angry: {
        icon: <Angry style={iconStyles} />,
        label: 'Angry',
    },
};

const getLabel = (
    state?: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry',
) => {
    if (state) {
        return stateMap[state].label;
    }
    return '';
};

const getIcon = (
    state?: 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry',
) => {
    if (state) {
        return stateMap[state].icon;
    }
    return <Like style={iconStyles} />;
};

const LikeButton: React.FC<Props> = props => {
    const { value, labelEnabled, onChange: onChangeProp, style } = props;
    const onChange = onChangeProp as (s: any) => {};
    const [state, setState] = useState(value);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <LikeButtonContainer
            style={style}
            onPress={() => {
                if (state) {
                    setState(undefined);
                    onChange(undefined);
                } else {
                    setState('like');
                    onChange('like');
                }
            }}
            onLongPress={() => {
                setModalVisible(true);
            }}
        >
            <IconContainer shadow>{getIcon(state)}</IconContainer>
            <RenderIf isTrue={labelEnabled && !!state}>
                <LableContainer>{getLabel(state)}</LableContainer>
            </RenderIf>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <StatesContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('like');
                            onChange('like');
                        }}
                    >
                        <LikeFilled style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('love');
                            onChange('love');
                        }}
                    >
                        <Love style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('haha');
                            onChange('haha');
                        }}
                    >
                        <Haha style={modalIconStyle} />
                    </ButtonIconContainer>

                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('wow');
                            onChange('wow');
                        }}
                    >
                        <Wow style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('sad');
                            onChange('sad');
                        }}
                    >
                        <Sad style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            setState('angry');
                            onChange('angry');
                        }}
                    >
                        <Angry style={modalIconStyle} />
                    </ButtonIconContainer>
                </StatesContainer>
            </Modal>
        </LikeButtonContainer>
    );
};

LikeButton.propTypes = {
    value: PropTypes.oneOf(['like', 'love', 'haha', 'wow', 'sad', 'angry']),
    labelEnabled: PropTypes.bool,
    onChange: PropTypes.func,
};

LikeButton.defaultProps = {
    value: undefined,
    labelEnabled: false,
    onChange: () => {},
};
export default LikeButton;
