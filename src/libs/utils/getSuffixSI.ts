const regex = /^[0-9]*$/;

function abbreviateNumber(text: number | string): string {
    if (text && typeof text === 'string' && !regex.test(`${text}`)) {
        return `${text}`;
    }

    const number = typeof text === 'string' ? parseInt(text, 10) : text;
    if (!number || number < 0 || isNaN(number)) {
        return '';
    }
    const SI_POSTFIXES = ['', 'k', 'M', 'G'];
    // eslint-disable-next-line no-bitwise
    const tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier === 0) {
        return `${number}`;
    }
    const postfix = SI_POSTFIXES[tier];

    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = `${scaled.toFixed(1)}`;
    if (/\.0$/.test(formatted)) {
        formatted = formatted.substr(0, formatted.length - 2);
    }
    return `${formatted}${postfix}`;
}

export default abbreviateNumber;
