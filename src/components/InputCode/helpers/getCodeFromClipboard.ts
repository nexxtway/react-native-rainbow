const sanitize = (str: string): string => {
    const regex = /[^0-9]/gi;
    return str.replace(regex, '');
};

const getCodeFromClipboard = (digits: number, pasteValue: string): string => {
    const regex = new RegExp(`\\d{${digits}}`);
    const sanitizeText = sanitize(pasteValue);
    const match = regex.exec(sanitizeText);
    if (!match) {
        return '';
    }
    return match[0];
};

export default getCodeFromClipboard;
