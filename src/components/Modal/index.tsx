import React, { ReactNode } from 'react';
import { Modal as NativeModal, View } from 'react-native';
import PropTypes from 'prop-types';
import { BaseProps } from '../types';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledCloseButton from './styled/closeButton';
import StyledCloseIcon from './styled/closeIcon';
import Header from './header';

interface Props extends BaseProps {
    title?: ReactNode;
    isOpen?: boolean;
    onRequestClose?: () => void;
    children?: ReactNode;
    hideCloseButton?: boolean;
}

const Modal: React.FC<Props> = props => {
    const {
        title,
        isOpen,
        onRequestClose,
        children,
        hideCloseButton,
        style,
    } = props;

    return (
        <NativeModal
            animationType="slide"
            transparent={false}
            visible={isOpen}
            onRequestClose={onRequestClose}
        >
            <StyledContainer style={style}>
                <View>
                    <Header title={title} />
                    <RenderIf isTrue={!hideCloseButton}>
                        <StyledCloseButton
                            icon={<StyledCloseIcon />}
                            onPress={onRequestClose}
                        />
                    </RenderIf>
                    {children}
                </View>
            </StyledContainer>
        </NativeModal>
    );
};

Modal.propTypes = {
    title: PropTypes.node,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    children: PropTypes.node,
    hideCloseButton: PropTypes.bool,
    style: PropTypes.object,
};

Modal.defaultProps = {
    title: null,
    isOpen: false,
    onRequestClose: () => {},
    children: null,
    hideCloseButton: false,
    style: undefined,
};

export default Modal;
