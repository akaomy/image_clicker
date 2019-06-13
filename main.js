let model = {
  currentImg: null,
  imgs: [
    {
      clickCount: 0,
      name : 'nature',
      imgSrc : 'https://placeimg.com/640/480/nature'
    },
    {
      clickCount: 0,
      name : 'animals',
      imgSrc : 'https://placeimg.com/640/480/animals'
    },
    {
      clickCount: 0,
      name : 'arch',
      imgSrc : 'https://placeimg.com/640/480/arch'
    },
    {
      clickCount: 0,
      name : 'people',
      imgSrc : 'https://placeimg.com/640/480/people'
    },
    {
      clickCount: 0,
      name : 'tech',
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

  getImage: function () {
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
  }
}

let imageView = {

  init: function () {
    // store variables with elements that we have in index.html
    this.imageViewContainerElement = document.querySelector('.img-view-container');
    this.imageNameElement = document.getElementById('img-name');
    this.imageElement = document.getElementById('img');
    this.imageDisplayCountElement = document.getElementById('cat-count');

    this.imageElement.addEventListener('click', function(ev) {
      controller.incrementCounter();
    };

    this.render();
  },

  render: function () {

  }

}

let imageListView = {

  init: function () {
    // create a var for image list elements
    this.imageListElement = document.getElementById('img-list');

    this.render();
  },

  render: function () {

  }

}


controller.init();
