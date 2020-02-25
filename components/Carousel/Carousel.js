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


// invoking the function
  carouselFunction();

rightButton = document.querySelector('.right-button');
rightButton.addEventListener('click',()=>{

});


function carouselFunction(){

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  carousel.appendChild(leftButton);

  const mountainsImg = document.createElement('img');
  mountainsImg.src = "./assets/carousel/mountains.jpeg";
  carousel.appendChild(mountainsImg);

  const computerImg = document.createElement('img');
  computerImg.src = './assets/carousel/computer.jpeg';
  carousel.appendChild(computerImg);

  const treesImg = document.createElement('img');
  treesImg.src = './assets/carousel/trees.jpeg';
  carousel.appendChild(treesImg);

  const turntableImg = document.createElement('img');
  turntableImg.src = './assets/carousel/turntable.jpeg';
  carousel.appendChild(turntableImg);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  carousel.appendChild(rightButton);

  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carousel);
  return carouselContainer;

}
