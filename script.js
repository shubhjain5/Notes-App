// document.getElementById('btn-add').addEventListener('click',function(){
//     prompt("success")
// })
shownote();
document.getElementById("btn-add").addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  // console.log(notesobj)+
  shownote();
});
function shownote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="Notescard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> Note ${index+1}</h5>
          <p id= "cardpara">${element}</p>
          <button id="${index}"  onclick = deletenote(this.id) class="btn btn-primary my-3" > Delete Note
        </button>
        <button id="${index}"  onclick = mark(this.id) class="btn btn-primary my-3" style = "font-size:10px;" > Mark
        </button>
        </div>
      </div> `;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = "There is nothing to show please Add a Note here!";
  }
}
function deletenote(index) {
//   console.log("deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownote();
}
let btn_search = document.getElementById("btn-search")
let search = document.getElementById('searchtext');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('Notescard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
      })
})