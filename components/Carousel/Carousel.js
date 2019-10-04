/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreater () {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('div');
  const rightBtn = document.createElement('div');
  const compImg = document.createElement('img');
  const mtImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const tableImg = document.createElement('img');

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');
  compImg.classList.add('carousel_image');
  mtImg.classList.add('carousel_image');
  treesImg.classList.add('carousel_image');
  tableImg.classList.add('carousel_image');

  fidoImg.src = '../assets/carousel/computer.jpg'
  maxImg.src = '../assets/carousel/mountains.jpg'
  puppersImg.src = '../assets/carousel/trees.jpg'
  sirImg.src = '../assets/carousel/turntable.jpg'

  carousel.appendChild(leftBtn);
  carousel.appendChild(rightBtn);
  carousel.appendChild(compImg);
  carousel.appendChild(mtImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(tableImg);

  //Tried to make the carousel work
  // var itemClassName = "carousel_image";
  //   items = document.getElementsByClassName(itemClassName),
  //   totalItems = items.length,
  //   slide = 0,
  //   moving = true;

  //   function setInitialClasses() {
  //     // Targets the previous, current, and next items
  //     // This assumes there are at least three items.
  //     items[totalItems - 1].classList.add("prev");
  //     items[0].classList.add("active");
  //     items[1].classList.add("next");
  //   }
  //   // Set event listeners
  //   function setEventListeners() {
  //     var next = document.getElementsByClassName('carousel__button--next')[0],
  //         prev = document.getElementsByClassName('carousel__button--prev')[0];
  //     next.addEventListener('click', moveNext);
  //     prev.addEventListener('click', movePrev);
  //   }

  return carousel;
}



const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());