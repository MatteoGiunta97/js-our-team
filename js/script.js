/*
Consegna:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/


// creo l'array di oggetti
const team = [
    {
        name: 'Wayne Barnet',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

console.log(team)

// seleziono gli elementi nel DOM 
const cards = document.querySelector('.ms-cards');

// ciclo gli elementi dell'array e gli stampo su console
for(let i = 0; i < team.length; i++) {
    const thisPerson = team[i];
    console.log(`${thisPerson.name} ${thisPerson.role} ${thisPerson.image}`);

    // creo il template per ogni oggetto/card
    const newCard = `
        <li>
            <h3>${thisPerson.name}</h3>
            <h5>${thisPerson.role}</h5>
            <img src="img/${thisPerson.image}"></img>
        </li>
    `;

    // inserisco gli elementi dell'array nel DOM tramite template
    cards.innerHTML += newCard;
    
}

