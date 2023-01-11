// function toggleDiv() {
//   let btnNode = document.querySelectorAll('.btn.buttonNode')
//   let toggleDivNode = document.querySelectorAll('div.toggleDiv')
//   btnNode.addEventListner("click", function () {
//       toggleDivNode.classList.toggle('invisible')
//   })
// }

// toggleDiv();

function countAlbums() {
  let albums = document.querySelectorAll(".covers");
  let cardAlbums = document.getElementsByClassName(".music-cards");

  let albumCounts = cardAlbums.length + albums.length;

  let counter = document.getElementById("totalCovers");
  counter.innerText = albumCounts;
}

window.onload = () => {
  countAlbums();
};
