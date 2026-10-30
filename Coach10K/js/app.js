document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProgress();

        updateWeight();

        console.log(
            "Coach10K chargé"
        );

    }
);

const saveWeightBtn =
    document.getElementById(
        "saveWeightBtn"
    );

if(saveWeightBtn){

    saveWeightBtn.addEventListener(
        "click",
        () => {

            const weight =
                document.getElementById(
                    "weightInput"
                ).value;

            if(weight){

                saveWeightEntry(weight);

                Storage.save(
                    "weight",
                    weight
                );

                renderWeightHistory();

                updateWeight();

            }

        }
    );
}

if ("serviceWorker" in navigator) {

    window.addEventListener(

        "load",

        () => {

            navigator.serviceWorker
                .register(
                    "./service-worker.js"
                )

                .then(() => {

                    console.log(
                        "Service Worker installé"
                    );

                })

                .catch(error => {

                    console.log(error);

                });

        }

    );

}
