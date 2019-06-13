let cat1Img = document.querySelector('.cat1Img');
let cat1Click = document.querySelector('.cat1Click');
let catName1 = document.querySelector('.cat-name1');
let count1 = 0;

let cat2Img = document.querySelector('.cat2Img');
let cat2Click = document.querySelector('.cat2Click');
let catName2 = document.querySelector('.cat-name2');
let count2 = 0;

let cat3Img = document.querySelector('.cat3Img');
let cat3Click = document.querySelector('.cat3Click');
let catName3 = document.querySelector('.cat-name3');
let count3 = 0;

let cat4Img = document.querySelector('.cat4Img');
let cat4Click = document.querySelector('.cat4Click');
let catName4 = document.querySelector('.cat-name4');
let count4 = 0;

let cat5Img = document.querySelector('.cat5Img');
let cat5Click = document.querySelector('.cat5Click');
let catName5 = document.querySelector('.cat-name5');
let count5 = 0;

cat1Img.addEventListener('click', function() {
  console.log('click');
  count1 += 1;
  cat1Click.innerText = count1;
});

cat2Img.addEventListener('click', function() {
  console.log('click');
  count2 += 1;
  cat2Click.innerText = count2;
});

cat3Img.addEventListener('click', function() {
  console.log('click');
  count3 += 1;
  cat3Click.innerText = count3;
});

cat4Img.addEventListener('click', function() {
  console.log('click');
  count4 += 1;
  cat4Click.innerText = count4;
});

cat5Img.addEventListener('click', function() {
  console.log('click');
  count5 += 1;
  cat5Click.innerText = count5;
});

let cat1Container = document.querySelector('.cat1');
let paragraph1 = document.createElement('p');
paragraph1.textContent = "Vasya";
cat1Container.appendChild(paragraph1);

let cat2Container = document.querySelector('.cat2');
let paragraph2 = document.createElement('p');
paragraph2.textContent = "Petya";
cat2Container.appendChild(paragraph2);

let cat3Container = document.querySelector('.cat3');
let paragraph3 = document.createElement('p');
paragraph3.textContent = "Jack";
cat3Container.appendChild(paragraph3);

let cat4Container = document.querySelector('.cat4');
let paragraph4 = document.createElement('p');
paragraph4.textContent = "Lapa";
cat4Container.appendChild(paragraph4);

let cat5Container = document.querySelector('.cat5');
let paragraph5 = document.createElement('p');
paragraph5.textContent = "Vova";
cat5Container.appendChild(paragraph5);
