import React, { useEffect } from 'react';

const useSegmentAnimation = ({ index: number, optionsLength: number }) => {
    const inputRange = Array.from({ length: optionsLength })
        .fill('')
        .map((_, i) => i);

    const outputRange = Array.from({ length: optionsLength })
        .fill('')
        .map((_, i) => `${Math.round(segmentWidth * i * 100) / 100}%`);
};

export default useSegmentAnimation;
