function vibrate(ms) {
    navigator.vibrate(ms)
}

function vibratePattern(short, long, pause) {
    // short (int) -> short vibration time in miliseconds
    // long (int) -> long vibration time in miliseconds
    // pause (int) -> pause between vibrations
    navigator.vibrate([
        short, pause, short, pause, short, pause,
        long, pause, long, pause, long, pause,
        short, pause, short, pause, short, pause
    ])
};