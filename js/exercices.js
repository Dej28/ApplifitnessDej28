/*
=================================
BIBLIOTHÈQUE D'EXERCICES
=================================
*/

const EXERCISES = [

{
    id:"squat",
    name:"Squat",
    category:"Jambes",
    gif:"assets/gifs/squat.gif",
    sets:"3 x 12",
    description:"Descendre les hanches jusqu'à ce que les cuisses soient parallèles au sol.",
    muscles:"Quadriceps, Fessiers"
},

{
    id:"clamshell",
    name:"Clamshell",
    category:"Hanches",
    gif:"assets/gifs/clamshell.gif",
    sets:"3 x 15",
    description:"Ouvrir le genou supérieur tout en gardant les pieds collés.",
    muscles:"Moyen fessier"
},

{
    id:"bridge",
    name:"Pont fessier",
    category:"Fessiers",
    gif:"assets/gifs/glute_bridge.gif",
    sets:"3 x 15",
    description:"Lever les hanches jusqu'à former une ligne droite épaules-hanches-genoux.",
    muscles:"Fessiers, Ischio-jambiers"
},

{
    id:"stepup",
    name:"Step-Up",
    category:"Jambes",
    gif:"assets/gifs/step_up.gif",
    sets:"3 x 12",
    description:"Monter sur une marche en poussant avec la jambe avant.",
    muscles:"Quadriceps, Fessiers"
},

{
    id:"copenhagen",
    name:"Copenhagen Plank",
    category:"Adducteurs",
    gif:"assets/gifs/copenhagen_plank.gif",
    sets:"3 x 25 sec",
    description:"Maintenir le corps aligné en appui sur la jambe supérieure.",
    muscles:"Adducteurs"
},

,

{
    id:"reverse_lunge",
    name:"Fente arrière",
    category:"Jambes",
    gif:"assets/gifs/reverse_lunge.gif",
    sets:"3 x 12",
    description:"Faire un pas vers l'arrière puis revenir en position debout.",
    muscles:"Quadriceps, Fessiers"
},

{
    id:"single_leg_bridge",
    name:"Pont fessier une jambe",
    category:"Fessiers",
    gif:"assets/gifs/single_leg_bridge.gif",
    sets:"3 x 12",
    description:"Lever les hanches en gardant une jambe tendue.",
    muscles:"Fessiers, Ischio-jambiers"
},

{
    id:"side_plank",
    name:"Gainage latéral",
    category:"Core",
    gif:"assets/gifs/side_plank.gif",
    sets:"3 x 30 sec",
    description:"Maintenir une position gainée sur le côté.",
    muscles:"Obliques, Core"
},

{
    id:"front_plank",
    name:"Planche",
    category:"Core",
    gif:"assets/gifs/front_plank.gif",
    sets:"3 x 30 sec",
    description:"Maintenir une position de gainage ventral.",
    muscles:"Abdominaux"
},

{
    id:"band_walk",
    name:"Marche latérale avec élastique",
    category:"Hanches",
    gif:"assets/gifs/band_walk.gif",
    sets:"3 x 15 pas",
    description:"Déplacement latéral sous tension.",
    muscles:"Moyen fessier"
},

{
    id:"calf_raise",
    name:"Extension mollets",
    category:"Mollets",
    gif:"assets/gifs/calf_raise.gif",
    sets:"3 x 20",
    description:"Monter sur la pointe des pieds puis redescendre lentement.",
    muscles:"Mollets"
},

{
    id:"dead_bug",
    name:"Dead Bug",
    category:"Core",
    gif:"assets/gifs/dead_bug.gif",
    sets:"3 x 12",
    description:"Contrôle du tronc avec mouvements alternés bras-jambes.",
    muscles:"Abdominaux profonds"
},

{
    id:"bird_dog",
    name:"Bird Dog",
    category:"Core",
    gif:"assets/gifs/bird_dog.gif",
    sets:"3 x 12",
    description:"Extension alternée bras-jambe opposés.",
    muscles:"Lombaires, Abdominaux"
},

{
    id:"wall_sit",
    name:"Chaise au mur",
    category:"Jambes",
    gif:"assets/gifs/wall_sit.gif",
    sets:"3 x 45 sec",
    description:"Maintenir une position assise contre un mur.",
    muscles:"Quadriceps"
},

{
    id:"single_leg_balance",
    name:"Équilibre unipodal",
    category:"Stabilité",
    gif:"assets/gifs/single_leg_balance.gif",
    sets:"3 x 30 sec",
    description:"Tenir l'équilibre sur une jambe.",
    muscles:"Cheville, Hanche, Core"
}

{
    id:"bulgarian",
    name:"Fente Bulgare",
    category:"Jambes",
    gif:"assets/gifs/bulgarian_split_squat.gif",
    sets:"3 x 10",
    description:"Pied arrière posé sur un banc ou une marche.",
    muscles:"Quadriceps, Fessiers"
}

];


function displayExercises() {

    const container =
        document.getElementById(
            "exerciseLibrary"
        );

    if(!container) return;

    let html = "";

    EXERCISES.forEach(exercise => {

        html += `

        <div class="exercise-card">

            <h3>
                ${exercise.name}
            </h3>

            <p>
                <strong>Catégorie :</strong>
                ${exercise.category}
            </p>

            <img
                src="${exercise.gif}"
                alt="${exercise.name}"
                class="exercise-gif">

            <p>
                <strong>Séries :</strong>
                ${exercise.sets}
            </p>

            <p>
                <strong>Description :</strong><br>
                ${exercise.description}
            </p>

            <p>
                <strong>Muscles travaillés :</strong><br>
                ${exercise.muscles}
            </p>

            <p>
                <strong>Repos :</strong>
                60 secondes
            </p>

            <p>
                <strong>Niveau :</strong>
                Débutant à intermédiaire
            </p>

            <details>

                <summary>
                    Conseils d'exécution
                </summary>

                <ul>

                    <li>
                        Garder le dos droit
                    </li>

                    <li>
                        Contrôler le mouvement
                    </li>

                    <li>
                        Ne jamais forcer une douleur
                    </li>

                </ul>

            </details>

        </div>

        `;

    });

    container.innerHTML = html;
}

document.addEventListener(
    "DOMContentLoaded",
    displayExercises
);