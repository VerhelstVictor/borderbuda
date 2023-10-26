const image = new Image();
image.src = 'img/desktop-image.png';
image.onload = function () {
    const body = document.querySelector('body');
    const imageContainer = document.querySelector('.image-container');
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const containerWidth = imageContainer.offsetWidth;
    const containerHeight = containerWidth * (imageHeight / imageWidth);
    body.style.height = `${containerHeight}px`;
    imageContainer.style.height = `${containerHeight}px`;
    body.style.overflowY = 'scroll';
};

/* For mobile */
if (window.innerWidth <= 767) {
    image.src = 'img/mobile-image.png';
}