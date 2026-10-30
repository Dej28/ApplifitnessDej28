/*
=================================
STATS.JS
=================================
*/

function getWeightHistory() {

    return JSON.parse(
        localStorage.getItem("weightHistory")
        || "[]"
    );

}

function saveWeightEntry(weight) {

    const history =
        getWeightHistory();

    history.push({

        date:
            new Date()
            .toLocaleDateString(),

        weight:
            Number(weight)

    });

    localStorage.setItem(
        "weightHistory",
        JSON.stringify(history)
    );

}

/*
=================================
POIDS
=================================
*/

function renderWeightHistory() {

    const container =
        document.getElementById(
            "weightHistory"
        );

    if (!container) return;

    const history =
        getWeightHistory();

    if (history.length === 0) {

        container.innerHTML =
            "<p>Aucune donnée.</p>";

        return;
    }

    let html = "";

    history.reverse().forEach(item => {

        html += `
            <p>
                ${item.date}
                :
                ${item.weight} kg
            </p>
        `;

    });

    container.innerHTML = html;
}

/*
=================================
VO2MAX
=================================
*/

function calculateVO2() {

    const time =
        Number(
            document.getElementById(
                "vo2Time"
            ).value
        );

    const result =
        document.getElementById(
            "vo2Result"
        );

    if (!time || time <= 0) {

        result.innerHTML =
            "Temps invalide";

        return;
    }

    const vo2 =
        (483 / time) + 3.5;

    result.innerHTML =
        `
        VO₂max estimée :
        <strong>
        ${vo2.toFixed(1)}
        </strong>
        `;
}

/*
=================================
PREDICTION 10 KM
=================================
*/

function predict10K() {

    const fiveKm =
        Number(
            document.getElementById(
                "fiveKmTime"
            ).value
        );

    const output =
        document.getElementById(
            "predictionResult"
        );

    if (!fiveKm) return;

    const prediction =
        fiveKm * 2.08;

    const minutes =
        Math.floor(prediction);

    const seconds =
        Math.round(
            (prediction - minutes)
            * 60
        );

    output.innerHTML =
        `
        Estimation :
        <strong>
        ${minutes} min
        ${seconds} sec
        </strong>
        `;
}

/*
=================================
PROGRESSION
=================================
*/

function displayStats() {

    const completed =
        JSON.parse(
            localStorage.getItem(
                "completedSessions"
            ) || "[]"
        );

    const distanceTarget =
        120;

    const estimatedDistance =
        completed.length * 4;

    const stats =
        document.getElementById(
            "distanceStats"
        );

    if (!stats) return;

    stats.innerHTML =
        `
        Distance estimée :
        ${estimatedDistance} km
        <br>
        Objectif :
        ${distanceTarget} km
        `;
}

document.addEventListener(
"DOMContentLoaded",
() => {

    renderWeightHistory();

    displayStats();

}
);
