function vibrate(ms) {
    navigator.vibrate(ms)
}

function vibratePattern(short, long) {
    // short (int) -> short vibration time in miliseconds
    // long (int) -> long vibration time in miliseconds
    for (i=0; i<3; i++) {
        vibrate(short)
    };
    for (i=0; i<3; i++) {
        vibrate(long)
    };
    for (i=0; i<3; i++) {
        vibrate(short)
    };
};