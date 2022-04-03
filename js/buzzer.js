function shortVibrate() {
    navigator.vibrate(500)
};

function shortVibrate() {
    navigator.vibrate(1000)
};

function vibrate(ms) {
    navigator.vibrate(ms);
};

function vibratePattern() {
    for (i=0; i<3; i++) {
        shortVibrate();
    };
    for (i=0; i<3; i++) {
        longVibrate();
    };
    for (i=0; i<3; i++) {
        shortVibrate();
    };
}