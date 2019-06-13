let model = {
  currentImg: null,
  imgs: [
    {
      clickCount: 0,
      title : 'nature',
      imgSrc : 'https://placeimg.com/640/480/nature'
    },
    {
      clickCount: 0,
      title : 'animals',
      imgSrc : 'https://placeimg.com/640/480/animals'
    },
    {
      clickCount: 0,
      title : 'arch',
      imgSrc : 'https://placeimg.com/640/480/arch'
    },
    {
      clickCount: 0,
      title : 'people',
      imgSrc : 'https://placeimg.com/640/480/people'
    },
    {
      clickCount: 0,
      title : 'tech',
      imgSrc : 'https://placeimg.com/640/480/tech'
    }
  ]
}

let controller = {

  init: function () {
    imageView.init();
    imageListView.init();
  },

  getCurrentImg: function () {
    return model.currentImg;
  },

  getImages: function () {
    return model.imgs;
  },

  // stores currently selected image to the object that was passed
  // in setCurrentImg function
  setCurrentImg: function (img) {
    model.currentImg = img;
  },

  // increments clickCount by one each time this function was called
  incrementCounter: function () {
    model.currentImg.clickCount++;
    imageView.render();
  }
}

let imageView = {

  init: function () {
    // store variables with elements that we have in index.html
    this.imageViewContainerElement = document.querySelector('.img-view-container');
    this.imageTitleElement = document.getElementById('img-title');
    this.imageElement = document.getElementById('img');
    this.imageDisplayCountElement = document.getElementById('cat-count');

    this.imageElement.addEventListener('click', function(ev) {
      controller.incrementCounter();
    });

    this.render();
  },

  /*
  saves run results of function getCurrentImg into the variable currentImg
  updates initial value of counter to + 1 once for each click on image
  updates initial text value of image's title to the current's image title
  sets image's url to the current image url
  */
  render: function () {
    let currentImg = controller.getCurrentImg();
    this.countElement.textContent = currentImg.clickCount();
    this.imageTitleElement.textContent = currentImg.title;
    this.imageElement.src = currentImg.imgSrc;
  }

}

let imageListView = {

  init: function () {
    // create a var for image list elements
    this.imageListElement = document.getElementById('img-list');

    this.render();
  },

  render: function () {
    let images = controller.getImages();

    this.imageListElement.innerHTML = "";

    // for (const each in images.length) {
    // loops over the images
    for (let i = 0; i < images.length; i++) {
      let img = images[i];

      let btnElem = document.createElement('button');
      btnElem.textContent = img.title;

      // to make event listener to work inside a for loop we use closures
      // when you click on the button. tell the controller to set the current image
      // and render this image
      btnElem.addEventListener('click', (function(img) {
        return function() {
          controller.setCurrentImg(img);
          imageView.render();
        };
      })(img));

      // add the element that we'ce created to the list
      this.imageListElement.appendChild(btnElem);
    };
  }
};


controller.init();
