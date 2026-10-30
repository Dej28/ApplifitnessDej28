/*
=================================
FIT IMPORT
=================================
*/

function importFIT(file) {

    const reader = new FileReader();

    reader.onload = function(event) {

        const parser =
            new FitParser({

                force: true,
                speedUnit: "km/h",
                lengthUnit: "km",
                temperatureUnit: "celsius",
                elapsedRecordField: true,
                mode: "list"

            });

        parser.parse(

            event.target.result,

            function(error, data) {

                if(error){

                    console.error(error);

                    alert(
                        "Erreur FIT"
                    );

                    return;
                }

                processFIT(data);

            }
        );

    };

    reader.readAsArrayBuffer(file);
}

function processFIT(data) {

    const session =
        data.sessions[0];

    if(!session) return;

    const distance =
        (session.total_distance || 0);

    const duration =
        Math.round(
            (session.total_timer_time || 0)
            / 60
        );

    const heartRate =
        session.avg_heart_rate || "-";

    const calories =
        session.total_calories || "-";

    saveFITRun({
        distance,
        duration,
        heartRate,
        calories
    });

    displayFITResult({
        distance,
        duration,
        heartRate,
        calories
    });

}

function saveFITRun(run) {

    const runs =
        JSON.parse(
            localStorage.getItem(
                "fitRuns"
            ) || "[]"
        );

    runs.push({

        date:
            new Date()
            .toLocaleDateString(),

        distance:
            run.distance,

        duration:
            run.duration,

        heartRate:
            run.heartRate,

        calories:
            run.calories

    });

    localStorage.setItem(

        "fitRuns",

        JSON.stringify(runs)

    );

}

function displayFITResult(run) {

    const container =
        document.getElementById(
            "fitResults"
        );

    if(!container) return;

    container.innerHTML = `

        <h3>
            Activité importée
        </h3>

        <p>
            Distance :
            ${run.distance.toFixed(2)} km
        </p>

        <p>
            Durée :
            ${run.duration} min
        </p>

        <p>
            FC moyenne :
            ${run.heartRate} bpm
        </p>

        <p>
            Calories :
            ${run.calories}
        </p>

    `;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const fileInput =
            document.getElementById(
                "fitFile"
            );

        if(fileInput){

            fileInput.addEventListener(
                "change",
                (e)=>{

                    const file =
                        e.target.files[0];

                    if(file){

                        importFIT(file);

                    }

                }
            );

        }

    }
);