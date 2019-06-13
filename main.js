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

  setCurrentImg: function () {

  },

  incrementCounter: function () {

  }
}

let imageView = {

  init: function () {

  },

  render: function () {

  }

}

let imageListView = {

  init: function () {

  },

  render: function () {

  }

}


controller.init();
