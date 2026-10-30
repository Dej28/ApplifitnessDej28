/*
==========================================
GPS.JS
==========================================
*/

let watchId = null;
let positions = [];
let startTime = null;
let totalDistance = 0;

/*
==========================================
Distance entre 2 points GPS
==========================================
*/

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat =
        (lat2 - lat1) * Math.PI / 180;

    const dLon =
        (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2)
        +
        Math.cos(lat1 * Math.PI / 180)
        *
        Math.cos(lat2 * Math.PI / 180)
        *
        Math.sin(dLon / 2)
        *
        Math.sin(dLon / 2);

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}

/*
==========================================
Mise à jour affichage
==========================================
*/

function updateGPSDisplay() {

    document.getElementById(
        "gpsDistance"
    ).textContent =
        totalDistance.toFixed(2) + " km";

    const elapsed =
        (Date.now() - startTime) / 1000;

    const minutes =
        elapsed / 60;

    if (totalDistance > 0) {

        const pace =
            minutes / totalDistance;

        const min =
            Math.floor(pace);

        const sec =
            Math.round(
                (pace - min) * 60
            );

        document.getElementById(
            "gpsPace"
        ).textContent =
            min + " min "
            + sec + " s/km";

    }
}

/*
==========================================
Nouvelle position GPS
==========================================
*/

function onPosition(position) {

    const latitude =
        position.coords.latitude;

    const longitude =
        position.coords.longitude;

    positions.push({
        lat: latitude,
        lon: longitude
    });

    if (positions.length >= 2) {

        const previous =
            positions[
                positions.length - 2
            ];

        const current =
            positions[
                positions.length - 1
            ];

        totalDistance +=
            calculateDistance(
                previous.lat,
                previous.lon,
                current.lat,
                current.lon
            );

        updateGPSDisplay();
    }
}

/*
==========================================
Démarrer
==========================================
*/

function startRun() {

    if (
        !navigator.geolocation
    ) {

        alert(
            "GPS non disponible"
        );

        return;
    }

    positions = [];
    totalDistance = 0;

    startTime = Date.now();

    watchId =
        navigator.geolocation.watchPosition(

            onPosition,

            error => {

                console.log(error);

            },

            {
                enableHighAccuracy: true
            }
        );

    document.getElementById(
        "gpsStatus"
    ).textContent =
        "🟢 Enregistrement";

}

/*
==========================================
Arrêter
==========================================
*/

function stopRun() {

    if (watchId) {

        navigator.geolocation
            .clearWatch(watchId);

    }

    document.getElementById(
        "gpsStatus"
    ).textContent =
        "🔴 Arrêté";

    saveRun();

}

/*
==========================================
Sauvegarde
==========================================
*/

function saveRun() {

    const runs =
        JSON.parse(
            localStorage.getItem(
                "runs"
            ) || "[]"
        );

    const duration =
        Math.round(
            (Date.now() - startTime)
            / 60000
        );

    runs.push({

        date:
            new Date()
            .toLocaleDateString(),

        distance:
            totalDistance.toFixed(2),

        duration

    });

    localStorage.setItem(
        "runs",
        JSON.stringify(runs)
    );

    displayRuns();
}

/*
==========================================
Historique
==========================================
*/

function displayRuns() {

    const container =
        document.getElementById(
            "runHistory"
        );

    if (!container) return;

    const runs =
        JSON.parse(
            localStorage.getItem(
                "runs"
            ) || "[]"
        );

    let html = "";

    runs.reverse().forEach(run => {

        html += `
            <p>
            ${run.date}
            -
            ${run.distance} km
            -
            ${run.duration} min
            </p>
        `;

    });

    container.innerHTML = html;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .getElementById(
                "startRunBtn"
            )
            ?.addEventListener(
                "click",
                startRun
            );

        document
            .getElementById(
                "stopRunBtn"
            )
            ?.addEventListener(
                "click",
                stopRun
            );

        displayRuns();
    }
);
