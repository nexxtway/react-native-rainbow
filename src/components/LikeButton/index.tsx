import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
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
import RenderIf from '../RenderIf';

type Value = 'like' | 'love' | 'haha' | 'wow' | 'sad' | 'angry';

interface Props extends BaseProps {
    value?: Value;
    showLabel?: boolean;
    onChange?: (state?: any) => void;
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

const getLabel = (state?: Value) => {
    if (state) {
        return stateMap[state].label;
    }
    return '';
};

const getIcon = (state?: Value) => {
    if (state) {
        return stateMap[state].icon;
    }
    return <Like style={iconStyles} />;
};

const LikeButton: React.FC<Props> = props => {
    const { value, showLabel, onChange = () => {}, style } = props;
    const [position, setPosition] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const statesContainerStyle = { marginTop: (position.y || 0) + 25 };

    const ref = useRef();
    useEffect(() => {
        ref.current.measure((x, y, width, height, pageX, pageY) => {
            setPosition({ x: pageX, y: pageY });
        });
    }, []);

    return (
        <LikeButtonContainer
            style={style}
            ref={ref}
            onPress={() => {
                if (value) {
                    onChange(undefined);
                } else {
                    onChange('like');
                }
            }}
            onLongPress={() => {
                setModalVisible(true);
            }}
        >
            <IconContainer shadow>{getIcon(value)}</IconContainer>
            <RenderIf isTrue={showLabel && !!value}>
                <LableContainer>{getLabel(value)}</LableContainer>
            </RenderIf>
            <Modal
                isVisible={modalVisible}
                backdropColor="transparent"
                animationIn="fadeIn"
                animationOut="fadeOut"
                style={{ display: 'flex', justifyContent: 'flex-start' }}
                onBackdropPress={() => {
                    setModalVisible(false);
                }}
            >
                <StatesContainer style={statesContainerStyle}>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            onChange('like');
                        }}
                    >
                        <LikeFilled style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            onChange('love');
                        }}
                    >
                        <Love style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            onChange('haha');
                        }}
                    >
                        <Haha style={modalIconStyle} />
                    </ButtonIconContainer>

                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            onChange('wow');
                        }}
                    >
                        <Wow style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
                            onChange('sad');
                        }}
                    >
                        <Sad style={modalIconStyle} />
                    </ButtonIconContainer>
                    <ButtonIconContainer
                        onPress={() => {
                            setModalVisible(false);
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
    showLabel: PropTypes.bool,
    onChange: PropTypes.func,
};

LikeButton.defaultProps = {
    value: undefined,
    showLabel: false,
    onChange: () => {},
};

export default LikeButton;
