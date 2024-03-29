export default function clamp(value: number, min = 0, max = 1) {
    return Math.min(Math.max(min, value), max);
}
