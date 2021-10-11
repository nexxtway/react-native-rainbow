import decomposeColor from './decomposeColor';
import recomposeColor from './recomposeColor';
import clamp from './clamp';

export default function lighten(color: string, coefficient = 0.8) {
    const decomposedColor = decomposeColor(color);
    const coefficientClamped = clamp(coefficient);
    const { type = '', values = [] } = decomposedColor;

    if (type.indexOf('hsl') !== -1) {
        values[2] += (100 - values[2]) * coefficientClamped;
        values[2] = Math.floor(values[2]);
    } else if (type.indexOf('rgb') !== -1) {
        for (let index = 0; index < 3; index += 1) {
            values[index] += (255 - values[index]) * coefficientClamped;
            values[index] = Math.floor(values[index]);
        }
    }

    return recomposeColor(decomposedColor);
}
