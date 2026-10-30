/*
=========================================
GPX IMPORT
=========================================
*/

function importGPX(file) {

    const reader = new FileReader();

    reader.onload = function(e) {

        const text = e.target.result;

        const parser =
            new DOMParser();

        const xml =
            parser.parseFromString(
                text,
                "text/xml"
            );

        parseGPX(xml);
    };

    reader.readAsText(file);
}

function parseGPX(xml) {

    const points =
        xml.getElementsByTagName(
            "trkpt"
        );

    let distance = 0;

    let previousPoint = null;

    for(let i = 0; i < points.length; i++) {

        const point = points[i];

        const lat =
            parseFloat(
                point.getAttribute("lat")
            );

        const lon =
            parseFloat(
                point.getAttribute("lon")
            );

        if(previousPoint){

            distance +=
                calculateDistance(

                    previousPoint.lat,
                    previousPoint.lon,

                    lat,
                    lon

                );

        }

        previousPoint = {

            lat: lat,
            lon: lon

        };
    }

    saveImportedRun(
        distance,
        points.length
    );

    displayImportedStats(
        distance,
        points.length
    );
}

function saveImportedRun(
    distance,
    points
){

    const gpxRuns =
        JSON.parse(
            localStorage.getItem(
                "gpxRuns"
            ) || "[]"
        );

    gpxRuns.push({

        date:
            new Date()
            .toLocaleDateString(),

        distance:
            distance.toFixed(2),

        points:
            points

    });

    localStorage.setItem(

        "gpxRuns",

        JSON.stringify(
            gpxRuns
        )

    );

}

function displayImportedStats(
    distance,
    points
){

    const target =
        document.getElementById(
            "gpxResults"
        );

    if(!target) return;

    target.innerHTML = `

        <h3>Import GPX terminé</h3>

        <p>
            Distance :
            ${distance.toFixed(2)} km
        </p>

        <p>
            Points GPS :
            ${points}
        </p>

    `;
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const fileInput =
            document.getElementById(
                "gpxFile"
            );

        if(fileInput){

            fileInput.addEventListener(
                "change",
                (e)=>{

                    const file =
                        e.target.files[0];

                    if(file){

                        importGPX(file);

                    }
                }
            );

        }

    }
);