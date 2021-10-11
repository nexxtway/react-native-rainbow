export default function replaceAlpha(color: string, alpha: number) {
    if (color.substring(0, 4) !== 'rgba' || alpha === undefined) {
        return '';
    }
    const rgx = /^rgba\(((,?\s*\d+){3}).+$/;
    return color.replace(rgx, `rgba($1, ${alpha})`);
}
