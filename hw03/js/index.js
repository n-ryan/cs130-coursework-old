/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"
                    onclick="changePreview(event)"></div>
            </li>`;
    });
};

const changePreview = (ev) => {
    const selectedThumbnail = ev.target;
    currentlyDisplayed = Number(selectedThumbnail.dataset.index);
    const previewImage = document.querySelector('.featured_image');
    previewImage.style.backgroundImage = selectedThumbnail.style.backgroundImage;
};

const nextImage = () => {
    const imageArray = document.querySelectorAll('.image');
    const previewImage = document.querySelector('.featured_image');
    let imageToDisplay;
    if (currentlyDisplayed == (imageArray.length - 1)) {
        imageToDisplay = imageArray[0];
        currentlyDisplayed = 0;
    } else {
        imageToDisplay = imageArray[currentlyDisplayed + 1];
        currentlyDisplayed += 1;
    };
    previewImage.style.backgroundImage = imageToDisplay.style.backgroundImage;
};

const prevImage = () => {
    const imageArray = document.querySelectorAll('.image');
    const previewImage = document.querySelector('.featured_image');
    let imageToDisplay;
    if (currentlyDisplayed == 0) {
        imageToDisplay = imageArray[imageArray.length - 1];
        currentlyDisplayed = imageArray.length - 1;
    } else {
        imageToDisplay = imageArray[currentlyDisplayed - 1];
        currentlyDisplayed -= 1;
    };
    previewImage.style.backgroundImage = imageToDisplay.style.backgroundImage;
};

initScreen();

document.querySelector('.next').addEventListener("click", nextImage);
document.querySelector('.prev').addEventListener("click", prevImage);
document.querySelector('.featured_image').addEventListener("click", nextImage);

let currentlyDisplayed = 0;