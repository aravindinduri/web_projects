const type = document.querySelector(".typeing");
const textLoad = () => {
  setTimeout(() => {
    type.textContent = "Developer";
  }, 0);

  setTimeout(() => {
    type.textContent = "Freelancer";
  }, 3100);

  setTimeout(() => {
    type.textContent = "Copywriter";
  }, 6100);
}
textLoad();
setInterval(textLoad, 9100);

const trans = () => {
  const act = document.querySelector('.menu');
  act.classList.toggle('get');
}
const change = () => {
  const mo = document.querySelector('.navBar');
  mo.classList.toggle('motion');
}


document.onclick = function (e) {
  if (e.target.classList.contains('item-link') || e.target.querySelector.contains('header')) {
    var act = document.querySelector('.menu');
    var mo = document.querySelector('.navBar');
    act.classList.remove('get');
    mo.classList.remove('motion');
  }
}

/*slides*/
let flag = 0;
// slider(flag);
function controller(x){
  flag = flag + x;
  slider(flag);
}
slider(flag);
function slider(num) {
  let slide = document.getElementsByClassName('slides');

  if(num == slide.length){
    flag = 0;
    num = 0;
  }
  if(num < 0){
    flag = slide.length-1;
    num = slide.length-1;
  }

  for(let y of slide){
     y.style.display = "none";
  }
  slide[num].style.display = "block";
}