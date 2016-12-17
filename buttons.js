
function about() {
  document.getElementById("hook").innerHTML = "<center><h1>Farhan Chandel</h1><h3>Software Systems Major</h3></center><p>Graphic Designer and Partner at <a href='http://www.pixelsolutions.ca' ><u>Pixel Solutions</u></a>.</p>";
}

function Portfo() {
  document.getElementById("hook").innerHTML= "<div id='port'><img id='myImg' src='salon.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg2' src='logo.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg3' src='biz.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg4' src='PosterMockup.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg5' src='square.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg6' src='square.jpg' width='200' height = '200' onclick='mod(this)'><img id='myImg7' src='square.jpg' width='200' height = '200' onclick='mod(this)'></div>";


}

function Contact() {
  document.getElementById("hook").innerHTML = "<center><h1>Get in Touch.</h1></br>Email: Farhanchandel@gmail.com</br> Phone: 778-829-6205</br></center>";
}

function mod(ida) {

  var modal = document.getElementById('myModal');
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById(ida);
  var modalImg = document.getElementById("img01");
  modalImg.src = ida.src;
  modal.style.display = "block";


}
