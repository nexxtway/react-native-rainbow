import getValue from './getValue';

export default function isMin(number: number, step: number, min: number): boolean {
    if (getValue(Number(number)) - step < min) {
        return true;
    }
    return false;
}
