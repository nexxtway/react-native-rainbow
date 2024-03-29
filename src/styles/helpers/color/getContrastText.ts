import { COLOR_BRAND, COLOR_SUCCESS } from '../../colors';
import darken from './darken';
import getContrastRatio from './getContrastRatio';
import colorToRgba from './colorToRgba';

const light = {
    text: {
        primary: 'rgba(0, 0, 0, 0.87)',
    },
};

const dark = {
    text: {
        primary: 'rgba(255, 255, 255, 1)',
    },
};

const contrastThreshold = 2.5;

export default function getContrastText(background: string) {
    const isDefaultBackground =
        background === colorToRgba(COLOR_BRAND) ||
        background === colorToRgba(darken(COLOR_BRAND)) ||
        background === colorToRgba(COLOR_SUCCESS) ||
        background === colorToRgba(darken(COLOR_SUCCESS));

    const contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold || isDefaultBackground
            ? dark.text.primary
            : light.text.primary;

    return contrastText;
}
