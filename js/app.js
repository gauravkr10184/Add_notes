shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);

    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {

        html += `
    <div class="notecard my-3 mx-3 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1} </h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary my-3">Delete</button>
        </div>
        </div>
  
    `
    });
    let notesele = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesele.innerHTML = html;
    }
    else {
        notesele.innerHTML = `No note added `;
    }
}
function deletenote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {

            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});