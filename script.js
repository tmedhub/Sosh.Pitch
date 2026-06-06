const cover = document.getElementById("openBook");
const coverScreen = document.getElementById("cover");
const bookSection = document.getElementById("bookSection");

const panel = document.getElementById("archivePanel");
const closePanel = document.getElementById("closeArchive");
const expandButton = document.getElementById("expandArchive");

const tabs = document.querySelectorAll(
".chapter-tabs button"
);

let currentCategory = "social";
let currentIndex = 0;

/* OPEN BOOK */

cover.addEventListener("click", () => {

coverScreen.style.display = "none";

bookSection.classList.remove("hidden");

loadEntry(
archiveData.social[0]
);

});

/* LOAD ENTRY */

function loadEntry(entry){

document.getElementById("spreadImage").src =
entry.image;

document.getElementById("archiveDate").innerText =
entry.date;

document.getElementById("archiveNumber").innerText =
entry.archive;

document.getElementById("spreadTitle").innerText =
entry.title;

document.getElementById("spreadCaption").innerText =
entry.caption;

/* PANEL */

document.getElementById("panelTitle").innerText =
entry.title;

document.getElementById("panelWhy").innerText =
entry.why;

document.getElementById("panelHow").innerText =
entry.how;

document.getElementById("panelFuture").innerText =
entry.future;

const notesContainer =
document.getElementById("panelNotes");

notesContainer.innerHTML = "";

entry.notes.forEach(note => {

const div =
document.createElement("div");

div.className = "note-item";

div.innerText = note;

notesContainer.appendChild(div);

});

}

/* OPEN ARCHIVE */

expandButton.addEventListener("click", () => {

panel.classList.add("active");

});

/* CLOSE */

closePanel.addEventListener("click", () => {

panel.classList.remove("active");

});

/* TABS */

tabs.forEach(tab => {

tab.addEventListener("click", () => {

const category =
tab.dataset.category;

if(!archiveData[category]) return;

currentCategory = category;

currentIndex = 0;

loadEntry(
archiveData[category][0]
);

});

});
