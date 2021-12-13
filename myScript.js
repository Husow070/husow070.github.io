let modal = document.querySelectorAll(".myModal")
let btn = document.querySelectorAll(".buttoncolor");
let xclose = document.querySelectorAll(".close");

console.log(btn);


function showPupUp(index){
  const pop = document.querySelectorAll(".modal-show");
  pop[index].classList.toggle("hide");
  console.log()

  //op de klasses .vierkant, .wrapper, .bg Moet ook de blur classe getoggled worden.
  const blurry = document.querySelectorAll(".vierkant, .wrapper, .bg");
  blurry[0].classList.toggle("blur");
  blurry[1].classList.toggle("blur");

  document.getElementById("show-first").innerHTML = winkelTafels.discription();
  console.log(winkelTafels)
};

let btns = 0;

while (btns < btn.length) {
  btn[btns].addEventListener("click", function(){
    const index = [].indexOf.call(btn, this);
    showPupUp(index);
  });
  btns++;
};

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