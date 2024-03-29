import getLuminance from './getLuminance';

export default function getContrastRatio(foreground: string, background: string) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / Number((Math.min(lumA, lumB) + 0.05).toFixed(3));
}
