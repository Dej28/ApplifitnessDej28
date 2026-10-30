function updateProgress() {

    const completed =
        Storage.load(
            "completedSessions",
            []
        );

    const percent =
        Math.round(
            (completed.length / 36) * 100
        );

    const progress =
        document.getElementById(
            "completionPercent"
        );

    if (progress) {

        progress.textContent =
            percent + "%";

    }

    const counter =
        document.getElementById(
            "completedSessions"
        );

    if (counter) {

        counter.textContent =
            completed.length +
            " / 36";

    }
}

function updateWeight() {

    const weight =
        Storage.load("weight");

    const target =
        document.getElementById(
            "currentWeight"
        );

    if (target && weight) {

        target.textContent =
            weight + " kg";

    }
}
