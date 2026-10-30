/*
=========================================
TIMER.JS
Chronomètre + Compte à rebours
=========================================
*/

let stopwatchInterval = null;
let stopwatchSeconds = 0;

/*
=========================================
CHRONOMETRE
=========================================
*/

function updateStopwatchDisplay() {

    const display =
        document.getElementById(
            "stopwatchDisplay"
        );

    if (!display) return;

    const hours =
        Math.floor(
            stopwatchSeconds / 3600
        );

    const minutes =
        Math.floor(
            (stopwatchSeconds % 3600) / 60
        );

    const seconds =
        stopwatchSeconds % 60;

    display.textContent =
        String(hours).padStart(2, "0")
        + ":" +
        String(minutes).padStart(2, "0")
        + ":" +
        String(seconds).padStart(2, "0");
}

function startStopwatch() {

    if (stopwatchInterval) return;

    stopwatchInterval =
        setInterval(() => {

            stopwatchSeconds++;

            updateStopwatchDisplay();

        }, 1000);

}

function pauseStopwatch() {

    clearInterval(
        stopwatchInterval
    );

    stopwatchInterval = null;

}

function resetStopwatch() {

    pauseStopwatch();

    stopwatchSeconds = 0;

    updateStopwatchDisplay();

}

/*
=========================================
COMPTE A REBOURS
=========================================
*/

let countdownInterval = null;

function startCountdown() {

    const input =
        document.getElementById(
            "countdownInput"
        );

    const display =
        document.getElementById(
            "countdownDisplay"
        );

    if (!input || !display) return;

    let totalSeconds =
        Number(input.value) * 60;

    if (totalSeconds <= 0) {

        alert(
            "Entrez une durée valide."
        );

        return;

    }

    clearInterval(
        countdownInterval
    );

    countdownInterval =
        setInterval(() => {

            const minutes =
                Math.floor(
                    totalSeconds / 60
                );

            const seconds =
                totalSeconds % 60;

            display.textContent =
                String(minutes)
                    .padStart(2, "0")
                + ":" +
                String(seconds)
                    .padStart(2, "0");

            totalSeconds--;

            if (totalSeconds < 0) {

                clearInterval(
                    countdownInterval
                );

                display.textContent =
                    "✅ TERMINÉ";

                alert(
                    "Temps écoulé !"
                );

            }

        }, 1000);
}

function resetCountdown() {

    clearInterval(
        countdownInterval
    );

    const display =
        document.getElementById(
            "countdownDisplay"
        );

    if (display) {

        display.textContent =
            "05:00";

    }

}

/*
=========================================
INITIALISATION
=========================================
*/

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const startBtn =
            document.getElementById(
                "startStopwatchBtn"
            );

        const pauseBtn =
            document.getElementById(
                "pauseStopwatchBtn"
            );

        const resetBtn =
            document.getElementById(
                "resetStopwatchBtn"
            );

        const countdownBtn =
            document.getElementById(
                "startCountdownBtn"
            );

        const countdownResetBtn =
            document.getElementById(
                "resetCountdownBtn"
            );

        if (startBtn) {
            startBtn.addEventListener(
                "click",
                startStopwatch
            );
        }

        if (pauseBtn) {
            pauseBtn.addEventListener(
                "click",
                pauseStopwatch
            );
        }

        if (resetBtn) {
            resetBtn.addEventListener(
                "click",
                resetStopwatch
            );
        }

        if (countdownBtn) {
            countdownBtn.addEventListener(
                "click",
                startCountdown
            );
        }

        if (countdownResetBtn) {
            countdownResetBtn.addEventListener(
                "click",
                resetCountdown
            );
        }

        updateStopwatchDisplay();

    }
);
