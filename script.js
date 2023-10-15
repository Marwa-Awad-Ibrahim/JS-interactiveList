class Participant{
    constructor(name, image, age, eyeColor, hobby){
        this.name = name;
        this.image = image;
        this.age = age;
        this.eyeColor = eyeColor;
        this.hobby = hobby;
    }
}
function getParticipantList(){
    const chaewon = new Participant("Chaewon", "images/Chaewon2.jpg", "33", "dark brown", "Cycling");
    const damla = new Participant("Damla", "images/Damla.jpeg", "32", "light brown", "Camping");
    const kadir = new Participant("Kadir", "images/kadirozturkfoto2.jpeg", "35", "light brown", "Writing Novels");
    const kahirzat = new Participant("Kahirzat", "images/Kahirzat.jpeg", "26", "light brown", "Boxing");
    const marwa = new Participant("Marwa", "images/Marwa.jpg", "39", "light brown", "Photography");
    const mehmet = new Participant("Mehmet", "images/Mehmet.jpg", "43", "brown", "Marshal Arts");
    const melike = new Participant("Melike", "images/Melike.JPG", "29", "brown", "Baking");
    const Oleksandr = new Participant("Oleksander", "images/Oleksandr.jpg", "34", "green", "Coding");
    const Olena = new Participant("Olena", "images/Olena.jpg", "32", "green", "Art");
    const sema = new Participant("Sema", "images/SemaIstek.jpg", "41", "brown", "Marbling Art");
    const Vlad = new Participant("Vladimir", "images/Vladimir.jpg", "44", "hazel", "Camping");
    const Yidnek = new Participant("Yidnek", "images/Yidnek.jpg", "32", " dark brown", "Football");
    const Anastasiia = new Participant("Anastasiia", "images/Anastasiia.jpeg", "20", "brown", "Art");
    
    const participants = [Anastasiia, chaewon, damla, kadir, kahirzat, marwa, mehmet, melike, Oleksandr, Olena, sema,
    Vlad, Yidnek, ];
    return participants;
}

let listOfParticipant = document.getElementById("participants");

getParticipantList().forEach((participant) => {
const li = document.createElement("li");

const img = document.createElement("img");
img.src = participant.image;
img.alt = participant.name;

const h2 = document.createElement("h2");
h2.textContent = participant.name;

const partAge = creatParagraph(`Age: ${participant.age} years old`);

const partHobby = creatParagraph(`Hobby: ${participant.hobby}`);

li.onclick = function moreInfo(){
    toggleHidden(partAge, partHobby);
};

li.onmouseover = function imgChange(){
    img.style.borderRadius = "50%";
};

li.onmouseleave = function imgnorm(){
    img.style.borderRadius = "0px";
};

li.appendChild(img);
li.appendChild(h2);
li.appendChild(partAge);
li.appendChild(partHobby);

listOfParticipant.appendChild(li);
});

function creatParagraph(text){
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add("hidden");
    return paragraph;
}

function toggleHidden (...elements){
    elements.forEach((element)=>{
        element.classList.toggle("hidden");
    });
}
/*const partAge = document.createElement ("p");
partAge.classList.add("hidden");
partAge.textContent = `${participant.age} years old `;


const parthobby = document.createElement ("p");
parthobby.textContent = `Hobby: ${participant.hobby}`;
parthobby.classList.add("hidden");


const parteye = document.createElement ("p");
parteye.textContent = `Eye Color:  ${participant.eyeColor}`;
parteye.classList.add("hidden");

li.onclick = function moreInfo(){
    partAge.classList.remove("hidden");
    parthobby.classList.remove("hidden");
    parteye.classList.remove("hidden");*/











/*getParticipantList().forEach((participant) => {
    listOfParticipant.innerHTML +=
    "<li onclick=\"moreInfo()\">" +
    `<img src="${participant.image}" alt="${participant.name}"> `+
    `<h2>${participant.name}</h2>`+
    "</li>";
})

let existingText =liElement.innerHTML;

function moreInfo()
{
    existingText += `<p>"${participant.age}"+" years old"</p>` + `<p>"Eye Color: "+${participant.eyeColor}</p>` + `<p>"Hobby: " +${participant.hobby}</p>`;

    liElement.innerHTML = existingText 
}*/