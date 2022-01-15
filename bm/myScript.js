let modal = document.querySelectorAll(".myModal")
let btn = document.querySelectorAll(".buttoncolor");
let xclose = document.querySelector(".close");
let pop = document.querySelectorAll(".modal-show");
let btn1 = document.querySelectorAll(".buttoncolor1");


function showPupUp(index){
  pop[index].classList.toggle("hide");
  console.log(pop[index])

  //op de klasses .vierkant, .wrapper, .bg Moet ook de blur classe getoggled worden.
  const blurry = document.querySelectorAll(".vierkant, .wrapper, .bg");
  blurry[0].classList.toggle("blur");
  blurry[1].classList.toggle("blur");

  const myModal = document.querySelector("#show-first");
  myModal.innerHTML = winkelTafels[0].discription;
};


let btns = 0;
while (btns< btn.length) {
  btn[btns].addEventListener("click", function(){
    const index = [].indexOf.call(btn, this);
    showPupUp(index);
  });
  btns++;
};


function ClickOff (){
  // const pop = document.querySelector(".modal-content");
  pop[0].classList.toggle("hide");
}

xclose.addEventListener("click" , closeScreen)

function closeScreen() {
  const blurry = document.querySelectorAll(".vierkant, .wrapper, .bg");
  ClickOff();
  blurry[0].classList.toggle("blur");
  blurry[1].classList.toggle("blur");
}












// btn.addEventListener("click", showPupUp);

// function closeWindow(){
//   const pop = document.querySelector(".modal-content");
//   pop.classList.add("hide");

// };

// xclose.addEventListener("click", closeWindow);


// img.src = 'img/Shopimg/Meubel1.jpg'


// let imgDiv = document.querySelector(".x");
// let image = document.createElement("img");
// image.src ='img/Shopimg/IkeaVarde.jpg';
// image.style.width = "1000px";
// image.classList.add("small-img");
// imgDiv.appendChild(image);
