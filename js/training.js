/*
=========================================
COACH 10K
TRAINING.JS
=========================================
*/

const TRAINING_PLAN = [

{
    week: 1,
    session1: "25 min course facile",
    session2: "Renforcement A",
    session3: "30 min course facile",
    strength: "A"
},

{
    week: 2,
    session1: "28 min course facile",
    session2: "Renforcement A",
    session3: "35 min course facile",
    strength: "A"
},

{
    week: 3,
    session1: "30 min course facile",
    session2: "Renforcement A",
    session3: "40 min course facile",
    strength: "A"
},

{
    week: 4,
    session1: "30 min + 4 accélérations",
    session2: "Renforcement A",
    session3: "45 min course facile",
    strength: "A"
},

{
    week: 5,
    session1: "35 min course facile",
    session2: "Renforcement B",
    session3: "50 min course facile",
    strength: "B"
},

{
    week: 6,
    session1: "35 min + éducatifs",
    session2: "Renforcement B",
    session3: "55 min course facile",
    strength: "B"
},

{
    week: 7,
    session1: "40 min course facile",
    session2: "Renforcement B",
    session3: "60 min course facile",
    strength: "B"
},

{
    week: 8,
    session1: "40 min + 5 accélérations",
    session2: "Renforcement B",
    session3: "65 min course facile",
    strength: "B"
},

{
    week: 9,
    session1: "45 min course facile",
    session2: "Renforcement C",
    session3: "70 min course facile",
    strength: "C"
},

{
    week: 10,
    session1: "45 min + 6 accélérations",
    session2: "Renforcement C",
    session3: "75 min course facile",
    strength: "C"
},

{
    week: 11,
    session1: "50 min course facile",
    session2: "Renforcement C",
    session3: "80 min course facile",
    strength: "C"
},

{
    week: 12,
    session1: "30 min récupération",
    session2: "Renforcement léger",
    session3: "Course objectif 10 km",
    strength: "C"
}

];

/*
=========================================
DETAIL DES SEANCES COURSE
=========================================
*/

const RUNNING_DETAILS = {

1:{
    workout1:{
        title:"Course facile",
        warmup:"5 min marche rapide + 2 min footing léger",
        main:"25 min course facile",
        cooldown:"5 min marche",
        objective:"Reprise progressive"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"5 min marche rapide",
        main:"30 min course facile",
        cooldown:"5 min marche",
        objective:"Développer l'endurance"
    }
},

2:{
    workout1:{
        title:"Course facile",
        warmup:"5 min marche + mobilité",
        main:"28 min course facile",
        cooldown:"5 min marche",
        objective:"Augmenter progressivement le temps d'effort"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"5 min marche rapide",
        main:"35 min course facile",
        cooldown:"5 min marche",
        objective:"Endurance aérobie"
    }
},

3:{
    workout1:{
        title:"Course continue",
        warmup:"5 min footing léger",
        main:"30 min course facile",
        cooldown:"5 min marche",
        objective:"Consolidation"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"5 min footing léger",
        main:"40 min course facile",
        cooldown:"5 min marche",
        objective:"Base aérobique"
    }
},

4:{
    workout1:{
        title:"Accélérations",
        warmup:"10 min footing",
        main:"30 min + 4 accélérations de 20 secondes",
        cooldown:"5 min marche",
        objective:"Travail de la foulée"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"45 min course facile",
        cooldown:"5 min marche",
        objective:"Développer l'endurance"
    }
},

5:{
    workout1:{
        title:"Course facile",
        warmup:"10 min footing",
        main:"35 min course facile",
        cooldown:"5 min marche",
        objective:"Augmenter le volume"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"50 min course facile",
        cooldown:"5 min marche",
        objective:"Résistance"
    }
},

6:{
    workout1:{
        title:"Technique de course",
        warmup:"10 min footing",
        main:"35 min + éducatifs",
        cooldown:"5 min marche",
        objective:"Améliorer l'efficacité"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"55 min course facile",
        cooldown:"5 min marche",
        objective:"Endurance"
    }
},

7:{
    workout1:{
        title:"Course continue",
        warmup:"10 min footing",
        main:"40 min course facile",
        cooldown:"5 min marche",
        objective:"Capacité aérobique"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"60 min course facile",
        cooldown:"5 min marche",
        objective:"Préparation 10 km"
    }
},

8:{
    workout1:{
        title:"Accélérations",
        warmup:"10 min footing",
        main:"40 min + 5 accélérations",
        cooldown:"5 min marche",
        objective:"Améliorer la vitesse"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"65 min course facile",
        cooldown:"5 min marche",
        objective:"Préparation 10 km"
    }
},

9:{
    workout1:{
        title:"Course continue",
        warmup:"10 min footing",
        main:"45 min course facile",
        cooldown:"5 min marche",
        objective:"Stabilité d'allure"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"70 min course facile",
        cooldown:"5 min marche",
        objective:"Confiance"
    }
},

10:{
    workout1:{
        title:"Accélérations",
        warmup:"10 min footing",
        main:"45 min + 6 accélérations",
        cooldown:"5 min marche",
        objective:"Préparation spécifique 10 km"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"75 min course facile",
        cooldown:"5 min marche",
        objective:"Simulation de course"
    }
},

11:{
    workout1:{
        title:"Course continue",
        warmup:"10 min footing",
        main:"50 min course facile",
        cooldown:"5 min marche",
        objective:"Volume maximal"
    },
    workout3:{
        title:"Sortie longue",
        warmup:"10 min footing",
        main:"80 min course facile",
        cooldown:"5 min marche",
        objective:"Dernière longue sortie"
    }
},

12:{
    workout1:{
        title:"Récupération",
        warmup:"5 min footing léger",
        main:"30 min très facile",
        cooldown:"5 min marche",
        objective:"Récupération"
    },
    workout3:{
        title:"Objectif 10 km",
        warmup:"10 min footing progressif",
        main:"Course 10 km",
        cooldown:"10 min marche",
        objective:"Terminer le 10 km"
    }
}

};

/*
=========================================
SELECTEUR DE SEMAINES
=========================================
*/

function populateWeekSelector() {

    const selector =
        document.getElementById(
            "weekSelector"
        );

    if(!selector) return;

    selector.innerHTML = "";

    TRAINING_PLAN.forEach(week => {

        const option =
            document.createElement("option");

        option.value = week.week;

        option.textContent =
            "Semaine " + week.week;

        selector.appendChild(option);

    });
}

/*
=========================================
AFFICHAGE D'UNE SEMAINE
=========================================
*/

function displayWeek(weekNumber) {

    const container =
        document.getElementById(
            "trainingPlanContainer"
        );

    if (!container) return;

    const week =
        TRAINING_PLAN.find(
            x => x.week == weekNumber
        );

    if (!week) return;

    const running =
        RUNNING_DETAILS[week.week];

    let exercises = "";

    if (week.strength === "A") {

        exercises = `
        <ul>
            <li>Squat poids du corps - 3 x 12</li>
            <li>Clamshell avec bande - 3 x 15</li>
            <li>Pont fessier - 3 x 15</li>
            <li>Adduction ballon - 3 x 15</li>
            <li>Équilibre unipodal - 3 x 30 sec</li>
            <li>Planche - 3 x 30 sec</li>
        </ul>`;
    }

    if (week.strength === "B") {

        exercises = `
        <ul>
            <li>Squat - 3 x 15</li>
            <li>Fentes arrière - 3 x 12/jambe</li>
            <li>Step-Up - 3 x 12/jambe</li>
            <li>Marche latérale avec bande - 3 x 15 pas</li>
            <li>Copenhagen débutant - 3 x 15 sec</li>
            <li>Gainage latéral - 3 x 25 sec</li>
        </ul>`;
    }

    if (week.strength === "C") {

        exercises = `
        <ul>
            <li>Fente bulgare - 3 x 10/jambe</li>
            <li>Step-Up - 3 x 15/jambe</li>
            <li>Pont fessier une jambe - 3 x 12</li>
            <li>Copenhagen Plank - 3 x 25 sec</li>
            <li>Gainage latéral - 3 x 30 sec</li>
            <li>Squat - 3 x 15</li>
        </ul>`;
    }

    container.innerHTML = `

        <h3>Semaine ${week.week}</h3>

        <div class="card">

            <h4>🏃 Séance 1 : ${running.workout1.title}</h4>

            <p><strong>Échauffement :</strong> ${running.workout1.warmup}</p>

            <p><strong>Séance :</strong> ${running.workout1.main}</p>

            <p><strong>Retour au calme :</strong> ${running.workout1.cooldown}</p>

            <p><strong>Objectif :</strong> ${running.workout1.objective}</p>

        </div>

        <div class="card">

            <h4>💪 Séance 2 : ${week.session2}</h4>

            ${exercises}

        </div>

        <div class="card">

            <h4>🏃 Séance 3 : ${running.workout3.title}</h4>

            <p><strong>Échauffement :</strong> ${running.workout3.warmup}</p>

            <p><strong>Séance :</strong> ${running.workout3.main}</p>

            <p><strong>Retour au calme :</strong> ${running.workout3.cooldown}</p>

            <p><strong>Objectif :</strong> ${running.workout3.objective}</p>

        </div>

    `;

    const nextWorkout =
        document.getElementById(
            "nextWorkout"
        );

    if(nextWorkout){

        nextWorkout.innerHTML =
            running.workout1.main;

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

        populateWeekSelector();

        displayWeek(1);

        const selector =
            document.getElementById(
                "weekSelector"
            );

        if(selector){

            selector.addEventListener(
                "change",
                (e) => {

                    displayWeek(
                        Number(
                            e.target.value
                        )
                    );

                }
            );
        }
    }
);