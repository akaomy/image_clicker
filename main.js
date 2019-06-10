let cat1Img = document.querySelector('.cat1Img');
let cat1Click = document.querySelector('.cat1Click');
let catName1 = document.querySelector('.cat-name1');
let count1 = 0;

let cat2Img = document.querySelector('.cat2Img');
let cat2Click = document.querySelector('.cat2Click');
let catName2 = document.querySelector('.cat-name2');
let count2 = 0;

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

let cat1Container = document.querySelector('.cat1');
let paragraph1 = document.createElement('p');
paragraph1.textContent = "Vasya";
cat1Container.appendChild(paragraph1);

let cat2Container = document.querySelector('.cat2');
let paragraph2 = document.createElement('p');
paragraph2.textContent = "Petya";
cat2Container.appendChild(paragraph2);
