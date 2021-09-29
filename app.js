let msgBtn = document.getElementById("msgBtn");
let displayMsg = false;

let middle = document.getElementById("middle");
let msgContainer = document.getElementById("message-conatiner");

//calculating time and displaying
function showTime() {
  let curDate = new Date();
  let curDay = curDate.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerText = week[curDay];

  let hours = curDate.getHours();
  let minutes = curDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let myTime = `${hours}:${minutes}`;
  console.log(myTime);
  document.getElementById("top").innerText = myTime;
  document.getElementById("time").innerHTML = `${hours}<span>:</span>${minutes}`;
}

setInterval(showTime, 1000);

//displaying the message conatiner on click the button

msgBtn.addEventListener("click", function () {
  if (displayMsg) {
    displayMsg = false;
    middle.style.display = "inherit";
    msgContainer.style.display = "none";
  } else {
    displayMsg = true;
    middle.style.display = "none";
    msgContainer.style.display = "inherit";

    let msg = `
        <div id="msg-list">
        <p id="java">Java</p>
        <p id="html">Html</p>
        <p id="css">Css</p>
        </div>`;

    msgContainer.innerHTML = msg;
    var java = document.getElementById("java");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
  }


  //displaying the respective messages 
  
  java.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let javaMsg = `<p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>`;
    msgContainer.innerHTML = javaMsg;
  });

  html.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let htmlMsg = `<p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>`;
    msgContainer.innerHTML = htmlMsg;
  });

  css.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let cssMsg = `<p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>`;
    msgContainer.innerHTML = cssMsg;
  });
});
