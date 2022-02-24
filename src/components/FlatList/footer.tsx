import React from 'react';
import LoadingItem from './loadingItem';

const Footer = ({ showIf }: { showIf: boolean }) => {
    if (showIf) {
        return <LoadingItem />;
    }
    return null;
};

export default Footer;
