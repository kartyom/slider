const picturesArray = [
  `<img src="/pictures/img-1.jpeg">`,
  `<img src="/pictures/img-2.webp">`,
  `<img src="/pictures/img-3.jpeg">`,
  `<img src="/pictures/img-4.jpeg">`,
  `<img src="/pictures/img-5.jpeg">`,
];

const firstImg = document.getElementById("first-img");
const generalImg = document.getElementById("general-img");
const lastImg = document.getElementById("last-img");

firstImg.innerHTML = picturesArray[0];
generalImg.innerHTML = picturesArray[1];
lastImg.innerHTML = picturesArray[2];

function scrollCarouselNext() {
  let firstElement = picturesArray.shift();
  picturesArray.push(firstElement);

  firstImg.innerHTML = picturesArray[0];
  generalImg.innerHTML = picturesArray[1];
  lastImg.innerHTML = picturesArray[2];
}

function scrollCarouselPrev() {
  let lastElement = picturesArray.pop();
  picturesArray.unshift(lastElement);
  
  firstImg.innerHTML = picturesArray[0];
  generalImg.innerHTML = picturesArray[1];
  lastImg.innerHTML = picturesArray[2];
}
