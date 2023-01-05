const lamp = document.getElementById("img");
const lamp2 = document.getElementById("img2");
const lamp3 = document.getElementById("img3");
const tog = document.getElementById("tog");
const tog2 = document.getElementById("tog2");
const tog3 = document.getElementById("tog3");

const light = () => {
  if (tog.checked) {
    console.log("ON");
    lamp.src = "assets/images/on.gif";
  } else {
    console.log("OFF");
    lamp.src = "assets/images/off.gif";
  }

  if (tog2.checked) {
    console.log("ON");
    lamp2.src = "assets/images/on.gif";
  } else {
    console.log("OFF");
    lamp2.src = "assets/images/off.gif";
  }

  if (tog3.checked) {
    console.log("ON");
    lamp3.src = "assets/images/on.gif";
  } else {
    console.log("OFF");
    lamp3.src = "assets/images/off.gif";
  }
};
