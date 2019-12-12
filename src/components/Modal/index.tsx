import React, { ReactNode } from 'react';
import { Modal as NativeModal, View } from 'react-native';
import PropTypes from 'prop-types';
import { BaseProps } from '../types';
import RenderIf from '../RenderIf';
import { Container, CloseButton, StyledCloseIcon } from './styled/index';
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
            <Container style={style}>
                <View>
                    <Header title={title} />
                    <RenderIf isTrue={!hideCloseButton}>
                        <CloseButton
                            icon={<StyledCloseIcon />}
                            onPress={onRequestClose}
                        />
                    </RenderIf>
                    {children}
                </View>
            </Container>
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
