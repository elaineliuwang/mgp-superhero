var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal.style.display = "block";
  console.log("dress code");
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modal2 || event.target == modal3) {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}