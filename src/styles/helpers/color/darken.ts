import decomposeColor from './decomposeColor';
import recomposeColor from './recomposeColor';
import clamp from './clamp';

export default function darken(color: string, coefficient = 0.1) {
    const decomposedColor = decomposeColor(color);
    const coefficientClamped = clamp(coefficient);
    const { type = '', values = [] } = decomposedColor;

    if (type.indexOf('hsl') !== -1) {
        values[2] *= 1 - coefficientClamped;
        values[2] = Math.min(100, Math.floor(values[2]));
    } else if (type.indexOf('rgb') !== -1) {
        for (let index = 0; index < 3; index += 1) {
            values[index] *= 1 - coefficientClamped;
            values[index] = Math.min(255, Math.floor(values[index]));
        }
    }

    return recomposeColor(decomposedColor);
}
