import getValue from './getValue';

export default function isMax(number: number, step: number, max: number): boolean {
    if (getValue(Number(number)) + step > max) {
        return true;
    }
    return false;
}
