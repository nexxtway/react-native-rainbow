export default function isButtonDisabled(isMinOrMax?: boolean, disable?: boolean): boolean {
    if (isMinOrMax || disable) {
        return true;
    }
    return false;
}
